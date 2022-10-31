//Import required packages and files
const { validationResult } = require("express-validator");

// middleware for formatting errors from express-validator middleware

const handleValidationErrors = (req, res, next) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        const errors = validationErrors
            .array()
            .reduce((errObject, err) => {
                errObject[err.param] = err.msg;
                return errObject;
            }, {});

        const err = Error("Validation error");
        err.errors = errors;
        err.status = 400;
        return next(err);
    };

    next();
};

module.exports = { handleValidationErrors };
