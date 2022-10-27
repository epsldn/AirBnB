const express = require("express");
const { setTokenCookie, restoreUser, requireAuth } = require("../../utils/auth");
const { Spot, SpotImage, Review, Sequelize, sequelize, User, ReviewImage } = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const router = express.Router();

const reviewImageValidator = [
    check("url").exists({ checkFalsy: true }).withMessage("url must be provided"),
    handleValidationErrors
];
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

router.post("/:reviewId/images", reviewImageValidator, async (req, res, next) => {
    const reviewId = parseInt(req.params.reviewId);
    const { url } = req.body;
    const review = await Review.findByPk(reviewId, {
        include: {
            model: ReviewImage
        }
    });

    if (!review) {
        const err = new Error();
        err.message = "Review couldn't be found";
        err.status = 404;
        return next(err);
    };

    if (review.ReviewImages.length > 10) {
        const err = new Error("Maximum number of images for this resource was reached");
        err.status = 403;
        return next(err);
    }

    const newReviewImage = ReviewImage.build({ url, reviewId });
    await newReviewImage.save();

    res.json({ id: newReviewImage.id, url });

});

module.exports = router;