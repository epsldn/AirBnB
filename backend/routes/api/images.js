const express = require("express");
const { setTokenCookie, restoreUser, requireAuth } = require("../../utils/auth");
const { Spot, SpotImage, Review, Sequelize, sequelize, User, ReviewImage, Booking } = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { Op } = require("sequelize");
const router = express.Router();

router.delete("/spot-images/:imageId", requireAuth, async (req, res, next) => {
    const userId = parseInt(req.user.id);
    const imageId = parseInt(req.params.imageId);
    const image = await Spot.findOne({
        attributes: ["ownerId"],
        include: {
            model: SpotImage,
            where: {
                id: imageId
            }
        }
    });

    if (!image) {
        const err = new Error();
        err.status = 404;
        err.message = "Spot Image couldn't be found";
        return next(err);
    }

    if (image.ownerId !== userId) {
        const err = new Error();
        err.status = 403;
        err.message = "Forbidden";
        return next(err);
    }

    await image.SpotImages[0].destroy();
    res.json({
        message: "Successfully deleted",
        statusCode: 404
    });
});

router.delete("/review-images/:imageId", async (req, res, next) => {
    res.json("TeSTINg")
});
module.exports = router;