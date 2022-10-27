const express = require("express");
const { setTokenCookie, restoreUser, requireAuth } = require("../../utils/auth");
const { Spot, SpotImage, Review, Sequelize, sequelize, User, ReviewImage, Booking } = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const router = express.Router();

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
                limit: 1
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

    res.json({
        Bookings: bookings
    });
});


module.exports = router;