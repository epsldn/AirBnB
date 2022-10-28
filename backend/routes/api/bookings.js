const express = require("express");
const { setTokenCookie, restoreUser, requireAuth } = require("../../utils/auth");
const { Spot, SpotImage, Review, Sequelize, sequelize, User, ReviewImage, Booking } = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const router = express.Router();

router.get("/current", requireAuth, async (req, res, next) => {
    const userId = parseInt(req.user.id);
    const bookings = await Booking.findAll({
        where: {
            userId
        },
        include: {
            model: Spot,
            attributes: {
                include: [[sequelize.literal("(SELECT url FROM SpotImages WHERE spotId = Spot.id and preview = 1 ORDER BY updatedAt ASC LIMIT 1)"), "previewImage"]],
                exclude: ["createdAt", "updatedAt"]
            },
        },
    });

    res.json({
        Bookings: bookings
    });
});

router.put("/:bookingId", requireAuth, async (req, res, next) => {
    const userId = parseInt(req.user.id);
    const bookingId = parseInt(req.params.bookingId);

    const booking = await Booking.findByPk(bookingId);

    console.log(booking);
    res.json(booking);
});

module.exports = router;