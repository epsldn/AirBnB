const express = require("express");
const { setTokenCookie, restoreUser, requireAuth } = require("../../utils/auth");
const { Spot, SpotImage, Review, Sequelize, sequelize, User, ReviewImage, Booking } = require("../../db/models");
const { Op } = require("sequelize");
const { check, query } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const router = express.Router();

const validateSpot = [
    check("address").exists({ checkFalsy: true }).withMessage("Street Address is required"),
    check("city").exists({ checkFalsy: true }).withMessage("City is required"),
    check("state").exists({ checkFalsy: true }).withMessage("State is required"),
    check("country").exists({ checkFalsy: true }).withMessage("Country is required"),
    check("lat").exists({ checkFalsy: true }).isNumeric().withMessage("Lattitude is not valid"),
    check("lng").exists({ checkFalsy: true }).isNumeric().withMessage("Longtitude is not valid"),
    check("name").exists({ checkFalsy: true }).isLength({ min: 1, max: 50 }).withMessage("Name must be less than 50 characters"),
    check("description").exists({ checkFalsy: true }).withMessage("Description is required"),
    check("price").exists({ checkFalsy: true }).isNumeric().withMessage("Price per day is required"),
    handleValidationErrors
];

const validateSpotImages = [
    check("url").exists({ checkFalsy: true }).withMessage("You must link an image"),
    handleValidationErrors
];

const validateReview = [
    check("review").exists({ checkFalsy: true }).withMessage("Review text is required"),
    check("stars").exists({ checkFalsy: true }).isInt({ min: 1, max: 5 }).withMessage("Stars must be an integer from 1 to 5"),
    handleValidationErrors
];

const validateBooking = [
    check("startDate", "Start date cannot be in the past").custom((value, { req }) => Date.parse(value) >= Date.parse(new Date().toDateString())),
    check("startDate", "Please provide a start date.").exists({ checkFalsy: true }),
    check("endDate", "endDate cannot be on or before startDate").custom((value, { req }) => { return Date.parse(value) > Date.parse(req.body.startDate); }),
    check("endDate", "Please provide an end date.").exists({ checkFalsy: true }),
    handleValidationErrors
];

const validateSpotQueries = [
    query("page", "Page must be greater than or equal to 1").default(1).isInt({ min: 1, max: 10 }),
    query("size", "Size must be greater than or equal to 1").default(20).isInt({ min: 1, max: 20 }),
    query("maxLat", "Maximum latitude is invalid").optional({ checkFalsy: true }).isFloat(),
    query("minLat", "Minimum latitude is invalid").optional({ checkFalsy: true }).isFloat(),
    query("maxLng", "Maximum longitude is invalid").optional({ checkFalsy: true }).isFloat(),
    query("minLng", "Minimum longitude is invalid").optional({ checkFalsy: true }).isFloat(),
    query("minPrice", "Minimum price must be greater than or equal to 0").optional({ checkFalsy: true }).isFloat({ min: 0 }),
    query("maxPrice", "Maximum price must be greater than or equal to 0").optional({ checkFalsy: true }).isFloat({ min: 0 }),
    handleValidationErrors
];

router.get("/current", requireAuth, async (req, res, next) => {
    const ownerId = req.user.id;

    let spot = await Spot.findAll({
        where: {
            ownerId
        },
        include: [{
            model: SpotImage,
            attributes: [],
            where: { preview: true },
            order: ["preview"],
            required: false
        }, {
            model: Review,
            attributes: []
        }],
        attributes: ["id", "ownerId", "address", "city", "state", "country", "lat", "lng", "name", "description", "price", "createdAt", "updatedAt", [Sequelize.fn("avg", sequelize.col("Reviews.stars")), "avgRating"], [sequelize.col("SpotImages.url"), "previewImage"]],
        group: ["Spot.id", ["SpotImages.id"]]
    });
    return res.json({ Spots: spot });

});

router.get("/:spotId/bookings", requireAuth, async (req, res, next) => {
    const userId = parseInt(req.user.id);
    const spotId = parseInt(req.params.spotId);
    const spot = await Spot.findByPk(spotId);

    if (!spot) {
        const err = new Error();
        err.message = "Spot couldn't be found";
        err.status = 404;
        return next(err);
    };

    let bookings;
    if (spot.ownerId === userId) {
        bookings = await Booking.findAll({
            where: {
                spotId
            },
            include: {
                model: User
            }
        });
    } else {
        bookings = await Booking.findAll({
            where: {
                userId, spotId
            },
            attributes: ["spotId", "startDate", "endDate"]
        });
    }
    res.json({ Bookings: bookings });
});

router.post("/:spotId/bookings", requireAuth, validateBooking, async (req, res, next) => {
    const spotId = parseInt(req.params.spotId);
    const userId = parseInt(req.user.id);
    let { startDate, endDate } = req.body;
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    const spot = await Spot.findByPk(spotId, {
        attributes: [],
        include: {
            model: Booking,
            where: {
                endDate: {
                    [Op.gte]: startDate
                },
                startDate: {
                    [Op.lte]: endDate
                },
            },
            attributes: ["startDate", "endDate"],
            required: false
        },
    });

    if (!spot) {
        const err = new Error();
        err.message = "Spot couldn't be found";
        err.status = 404;
        return next(err);
    };

    if (spot.ownerId === userId) {
        const err = new Error();
        err.message = "Forbidden";
        err.status = 403;
        return next(err);
    }

    if (spot.Bookings.length === 0) {
        const newBooking = Booking.build({
            startDate, endDate, spotId, userId
        });
        await newBooking.save();
        return res.json(newBooking);
    }

    const err = new Error();
    err.message = "Sorry, this spot is already booked for the specified dates";
    err.errors = {};
    if (Date.parse(spot.Bookings[0].startDate) <= Date.parse(startDate)) err.errors.startDate = "Start date conflicts with an existing booking";
    if (Date.parse(spot.Bookings[0].endDate) >= Date.parse(endDate)) err.errors.endDate = "End date conflicts with an existing booking";
    err.status = 403;
    next(err);
});

router.get("/:spotId/reviews", async (req, res, next) => {
    const spot = await Spot.findByPk(req.params.spotId, {
        attributes: [],
        include: [
            {
                model: Review,
                include: [
                    {
                        model: ReviewImage,
                        attributes: ["id", "url"]
                    },
                    {
                        model: User
                    }
                ]
            },
        ]
    });
    if (!spot) {
        const err = new Error();
        err.message = "Spot couldn't be found";
        err.status = 404;
        return next(err);
    };

    return res.json(spot);
});

router.post("/:spotId/reviews", requireAuth, validateReview, async (req, res, next) => {
    const spotId = parseInt(req.params.spotId);
    const userId = parseInt(req.user.id);
    const { review, stars } = req.body;


    const spot = await Spot.findByPk(spotId, {
        include: {
            model: Review,
            where: { spotId, userId },
            required: false
        }
    });

    if (!spot) {
        const err = new Error();
        err.message = "Spot couldn't be found";
        err.status = 404;
        return next(err);
    };

    if (spot.Reviews.length > 0) {
        const err = new Error("User already has a review for this spot");
        err.status = 403;
        return next(err);
    }

    const newReview = Review.build({ review, stars, spotId, userId });
    await newReview.save();

    res.status(201);
    return res.json(newReview);
});

router.get("/:spotId", async (req, res, next) => {
    const id = req.params.spotId;
    const spot = await Spot.findByPk(id, {
        include: [
            {
                model: SpotImage,
                attributes: {
                    exclude: ["spotId", "createdAt", "updatedAt"]
                }
            }, {
                model: User,
                as: "Owner"
            },
            {
                model: Review,
                attributes: []
            }],
        attributes: {
            include: [[Sequelize.fn("COUNT", sequelize.col("Reviews.id")), "numReviews"], [Sequelize.fn("avg", sequelize.col("Reviews.stars")), "avgStarRating"]],
        },
        group: ["Spot.id", "Owner.id", "SpotImages.id"]
    });

    if (!spot) {
        const err = new Error();
        err.message = "Spot couldn't be found";
        err.status = 404;
        return next(err);
    };
    return res.json(spot);
});

router.get("/", validateSpotQueries, async (req, res, next) => {
    const pagination = {};
    pagination.limit = parseInt(req.query.size);
    pagination.offset = (parseInt(req.query.page) - 1) * pagination.limit;

    const where = {};

    if (req.query.maxLat && req.query.minLat) {
        where.lat = { [Op.between]: [parseFloat(req.query.minLat), parseFloat(req.query.maxLat)] };
    } else if (req.query.minLat) {
        where.lat = { [Op.gte]: parseFloat(req.query.minLat) };
    } else if (req.query.maxLat) {
        where.lat = { [Op.lte]: parseFloat(req.query.maxLat) };
    }

    if (req.query.maxLng && req.query.minLng) {
        where.lng = { [Op.between]: [parseFloat(req.query.minLng), parseFloat(req.query.maxLng)] };
    } else if (req.query.minLng) {
        where.lng = { [Op.gte]: parseFloat(req.query.minLng) };
    } else if (req.query.maxLng) {
        where.lng = { [Op.lte]: parseFloat(req.query.maxLng) };
    }

    if (req.query.maxPrice && req.query.minPrice) {
        where.price = { [Op.between]: [parseFloat(req.query.minPrice), parseFloat(req.query.maxPrice)] };
    } else if (req.query.minPrice) {
        where.price = { [Op.gte]: parseFloat(req.query.minPrice) };
    } else if (req.query.maxPrice) {
        where.price = { [Op.lte]: parseFloat(req.query.maxPrice) };
    }

    const spot = await Spot.findAll({
        ...pagination,
        subQuery: false,
        include: [{
            model: SpotImage,
            attributes: [],
            where: { preview: true },
            order: ["preview"],
            required: false,
        }, {
            model: Review,
            attributes: [],
        }],
        attributes: ["id", "ownerId", "address", "city", "state", "country", "lat", "lng", "name", "description", "price", "createdAt", "updatedAt", [Sequelize.literal(`(select cast(avg("stars") AS DECIMAL(1,2)) from "Reviews" where "spotId" = "Spot"."id")`), "avgRating"], [Sequelize.literal(`(select "url" from "SpotImages" where "preview" = true and "spotId" = ("Spot"."id") limit 1)`), "previewImage"]],
        order: ["id"],
        group: [["Spot.id"]],
        where
    });

    return res.json({ Spots: spot, page: +req.query.page, size: +req.query.size });
});

router.post("/:spotId/images", requireAuth, validateSpotImages, async (req, res, next) => {
    const ownerId = req.user.id;
    const spot = await Spot.findByPk(req.params.spotId);
    if (!spot) {
        const err = new Error();
        err.message = "Spot couldn't be found";
        err.status = 404;
        return next(err);
    };

    if (spot.ownerId !== ownerId) {
        const err = new Error("Forbidden");
        err.message = "Forbidden";
        err.status = 403;
        return next(err);
    }

    const { preview, url } = req.body;

    const newImage = await SpotImage.build({ preview, url, spotId: parseInt(req.params.spotId) });
    await newImage.save();

    return res.json({ id: newImage.id, url: newImage.url, preview: newImage.preview });
});

router.post("/", requireAuth, validateSpot, async (req, res, next) => {
    const ownerId = req.user.id;
    const { address, city, state, country, lat, lng, name, description, price } = req.body;
    const newSpot = Spot.build({
        ownerId, address, city, state, country, lat, lng, name, description, price
    });

    await newSpot.save();

    res.status(201);
    return res.json(newSpot);
});

router.put("/:spotId", requireAuth, validateSpot, async (req, res, next) => {
    const ownerId = req.user.id;
    const spot = await Spot.findByPk(req.params.spotId);
    if (!spot) {
        const err = new Error();
        err.message = "Spot couldn't be found";
        err.status = 404;
        return next(err);
    };

    if (spot.ownerId !== ownerId) {
        const err = new Error();
        err.message = "Forbidden";
        err.status = 403;
        return next(err);
    }

    const values = { address, city, state, country, lat, lng, name, description, price } = req.body;

    spot.set({
        ...values
    });

    await spot.save();
    return res.json(spot);
});

router.delete("/:spotId", requireAuth, async (req, res, next) => {
    const ownerId = req.user.id;
    const spot = await Spot.findByPk(req.params.spotId);
    if (!spot) {
        const err = new Error();
        err.message = "Spot couldn't be found";
        err.status = 404;
        return next(err);
    };

    if (spot.ownerId !== ownerId) {
        const err = new Error();
        err.message = "Forbidden";
        err.status = 403;
        return next(err);
    }

    await spot.destroy();

    return res.json({
        message: "Successfully deleted",
        "statusCode": 200
    });
});

module.exports = router;