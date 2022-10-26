//Import required packages and files
const { validationResult } = require("express-validator");

// middleware for formatting errors from express-validator middleware

const handleValidationErrors = (req, res, next) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        const errors = validationErrors
            .array()
            .reduce((accum, next) => {
                accum[next.param] = next.msg;
                return accum;
            }, {});

        const err = Error("Validation Error");
        err.errors = errors;
        err.status = 400;
        next(err);
    };

    next();
};

module.exports = { handleValidationErrors };
