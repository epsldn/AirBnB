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
        .exists({ checkFalsy: true }),
    check("lastName")
        .exists({ checkFalsy: true }),
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

// router.use((err, req, res, next) => {
//     if (err instanceof ValidationError) {
//         err = err.errors[0];
//         err.errors = { [err.path]: err.message };
//         err.title = "Validation Error";
//         err.statusCode = 403;
//         err.message = "User already exists";
//         res.status(err.statusCode);
//         res.json({
//             message: err.message,
//             statusCode: err.statusCode,
//             errors: err.errors,
//         });
//     }

//     next(err);
// });

module.exports = router;