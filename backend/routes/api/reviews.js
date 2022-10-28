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

const reviewValidator = [
    check("review").exists({ checkFalsy: true }).withMessage("Review text is required"),
    check("stars").exists({ checkFalsy: true }).isInt({ min: 1, max: 5 }).withMessage("Stars must be an integer from 1 to 5"),
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
            include: {
                model: SpotImage,
                attributes: []
            },
            attributes: {
                include: [[Sequelize.literal(`(select "url" from "SpotImages" where "preview" = true and "spotId" = ("Spot"."id") limit 1)`), "previewImage"]],
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

router.post("/:reviewId/images", requireAuth, reviewImageValidator, async (req, res, next) => {
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

    return res.json({ id: newReviewImage.id, url });

});

router.put("/:reviewId", reviewValidator, requireAuth, async (req, res, next) => {
    const id = parseInt(req.params.reviewId);
    const userId = parseInt(req.user.id);
    const foundReview = await Review.findByPk(id);
    const reviewData = { review, stars } = req.body;

    if (!foundReview) {
        const err = new Error();
        err.message = "Review couldn't be found";
        err.status = 404;
        return next(err);
    };

    if (foundReview.userId !== userId) {
        const err = new Error("Forbidden");
        err.status = 403;
        return next(err);
    }

    foundReview.set({ ...reviewData });
    await foundReview.save();

    res.json(foundReview);
});

router.delete("/:reviewId", requireAuth, async (req, res, next) => {
    const id = parseInt(req.params.reviewId);
    const userId = parseInt(req.user.id);
    const foundReview = await Review.findByPk(id);

    if (!foundReview) {
        const err = new Error();
        err.message = "Review couldn't be found";
        err.status = 404;
        return next(err);
    };

    if (foundReview.userId !== userId) {
        const err = new Error("Forbidden");
        err.message = "Forbidden";
        err.status = 403;
        return next(err);
    }

    await foundReview.destroy();

    return res.json({
        message: "Successfully deleted",
        "statusCode": 200
    });
});
module.exports = router;