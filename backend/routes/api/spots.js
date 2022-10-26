const express = require("express");
const { setTokenCookie, restoreUser, requireAuth } = require("../../utils/auth");
const { Spot, SpotImage, Review, Sequelize, sequelize, User } = require("../../db/models");
const { check } = require("express-validator");
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
            include: [[Sequelize.fn("COUNT", sequelize.col("Reviews.id")), "numReviews"]]
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
router.get("/", async (req, res, next) => {
    let spot = await Spot.findAll({
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

    res.json({ Spots: spot });
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

module.exports = router;