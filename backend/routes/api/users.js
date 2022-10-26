const express = require("express");
const { setTokenCookie, requireAuth } = require("../../utils/auth.js");
const { User } = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation.js");
const { ValidationError } = require("sequelize");
const router = express.Router();

const validateSignup = [
    check("email")
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage("Invalid Email"),
    check("username")
        .exists({ checkFalsy: true })
        .withMessage("Username is required"),
    check("username")
        .not()
        .isEmail()
        .withMessage("Username cannot be an email."),
    check("firstName")
        .exists({ checkFalsy: true })
        .withMessage("First name is required"),
    check("lastName")
        .exists({ checkFalsy: true })
        .withMessage("Last name is required"),
    handleValidationErrors
];

router.post("/", validateSignup, async (req, res, next) => {
    const { email, password, username, firstName, lastName } = req.body;

    const user = await User.signup({ email, username, password, firstName, lastName });

    const token = await setTokenCookie(res, user);

    const resUser = user.toSafeObject();

    resUser.token = token;

    return res.json(resUser);
});


module.exports = router;