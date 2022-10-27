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
            include: {
                model: SpotImage
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        }
    });

    res.json({
        bookings
    });
});
module.exports = router;