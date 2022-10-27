const express = require("express");
const { setTokenCookie, restoreUser, requireAuth } = require("../../utils/auth");
const { Spot, SpotImage, Review, Sequelize, sequelize, User, ReviewImage } = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const router = express.Router();

router.get("/", async (req, res, next) => {
    res.json("IT'S ALIVE");
});
module.exports = router;