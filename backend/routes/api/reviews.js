const express = require("express");
const { setTokenCookie, restoreUser, requireAuth } = require("../../utils/auth");
const { Spot, SpotImage, Review, Sequelize, sequelize, User, ReviewImage } = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const router = express.Router();


router.get("/current", requireAuth, async (req, res, next) => {
    const userId = req.user.id;

    const reviews = await Review.findAll({
        where: { userId },
        include: [{
            model: User
        },
        {
            model: Spot,
            attributes: {
                exclude: ["description", "createdAt", "updatedAt"]
            }
        },
        {
            model: ReviewImage,
            attributes: ["id", "url"]
        }
        ]
    });
    return res.json({ reviews });
});
module.exports = router;