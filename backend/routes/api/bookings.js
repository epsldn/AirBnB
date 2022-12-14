const express = require("express");
const { setTokenCookie, restoreUser, requireAuth } = require("../../utils/auth");
const { Spot, SpotImage, Review, Sequelize, sequelize, User, ReviewImage, Booking } = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { Op } = require("sequelize");
const router = express.Router();

// const validateBooking = [
//     // check("startDate", "Start date cannot be in the past").custom((value, { req }) => Date.parse(value) >= Date.parse(new Date().toDateString())),
//     // check("startDate", "Please provide a start date.").exists({ checkFalsy: true }),
//     check("endDate", "endDate cannot be on or before startDate").exists({ checkFalsy: true }).custom((value, { req }) => { return Date.parse(value) > Date.parse(req.body.startDate); }),
//     // check("endDate", "Please provide an end date.").exists({ checkFalsy: true }),
//     handleValidationErrors
// ];

const validateBooking = [
    check("endDate", "endDate cannot be on or before startDate").exists({ checkFalsy: true }).custom((value, { req }) => { return Date.parse(value) > Date.parse(req.body.startDate); }),
    handleValidationErrors
];
router.get("/current", requireAuth, async (req, res, next) => {
    const userId = parseInt(req.user.id);
    let bookings = await Booking.findAll({
        where: {
            userId
        },
        include: {
            model: Spot,
            include: {
                model: SpotImage,
                where: {
                    preview: true
                },
                attributes: ["url"],
                required: false,
                limit: 1,
                subQuery: false
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
        },
    });

    bookings = bookings.map(booking => {
        booking = booking.toJSON();
        if (booking.Spot.SpotImages.length > 0) {
            booking.Spot.previewImage = booking.Spot.SpotImages[0].url;
        } else {
            booking.Spot.previewImage = null;
        }
        delete booking.Spot.SpotImages;
        return booking;
    });

    return res.json({
        Bookings: bookings
    });
});

router.put("/:bookingId", requireAuth, validateBooking, async (req, res, next) => {
    const bookingId = parseInt(req.params.bookingId);
    const userId = parseInt(req.user.id);
    let { startDate, endDate } = req.body;
    startDate = new Date(startDate);
    endDate = new Date(endDate);

    const booking = await Booking.findByPk(bookingId);
    if (!booking) {
        const err = new Error();
        err.message = "Booking couldn't be found";
        err.status = 404;
        return next(err);
    }

    if (booking.userId !== userId) {
        const err = new Error("Forbidden");
        err.message = "Forbidden";
        err.status = 403;
        return next(err);
    }

    if (Date.parse(booking.endDate) < Date.now()) {
        const err = new Error("Past bookings can't be modified");
        err.message = "Past bookings can't be modified";
        err.status = 403;
        return next(err);
    }
    const spotId = parseInt(booking.spotId);
    const bookings = await Booking.findAll({
        where: {
            endDate: {
                [Op.gte]: startDate
            },
            startDate: {
                [Op.lte]: endDate
            },
            spotId
        },
        attributes: ["startDate", "endDate"],
        raw: true
    });


    if (bookings.length === 0) {
        booking.set({
            startDate, endDate, spotId, userId
        });
        await booking.save();
        return res.json(booking);
    }

    const err = new Error("Sorry, this spot is already booked for the specified dates");
    err.errors = {};
    if (Date.parse(bookings[0].startDate) <= Date.parse(startDate)) err.errors.startDate = "Start date conflicts with an existing booking";
    if (Date.parse(bookings[0].endDate) >= Date.parse(endDate)) err.errors.endDate = "End date conflicts with an existing booking";
    err.status = 403;
    next(err);
});

router.delete("/:bookingId", requireAuth, async (req, res, next) => {
    const bookingId = parseInt(req.params.bookingId);
    const userid = parseInt(req.user.id);
    const booking = await Spot.findOne({
        include: {
            model: Booking,
            where: {
                id: bookingId
            },
        },
        attributes: ["ownerId"]
    });

    if (!booking) {
        const err = new Error();
        err.message = "Booking couldn't be found";
        err.status = 404;
        return next(err);
    }

    if (booking.ownerId !== userid && booking.Bookings[0].userId !== userid) {
        const err = new Error();
        err.message = "Forbidden";
        err.status = 403;
        return next(err);
    }

    if (Date.parse(booking.Bookings[0].startDate) <= Date.parse(new Date().toDateString())) {
        const err = new Error();
        err.message = "Bookings that have started can't be deleted";
        err.status = 403;
        return next(err);
    }

    await booking.Bookings[0].destroy();
    return res.json({
        message: "Successfully deleted",
        statusCode: 200
    });
});

module.exports = router;