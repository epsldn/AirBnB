const express = require("express");
const { setTokenCookie, restoreUser, requireAuth } = require("../../utils/auth");
const { Spot, SpotImage, Review, Sequelize, sequelize } = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const router = express.Router();

router.get("");

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

module.exports = router;