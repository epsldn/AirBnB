//Import required packages and files
const { validationResult } = require("express-validator");

// middleware for formatting errors from express-validator middleware

const handleValidationErrors = (req, res, next) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        const errors = validationErrors
            .array()
            .map(error => `${error.msg}`);

        console.log(errors);
        const err = Error("Bad request.");
        err.errors = errors;
        err.status = 400;
        err.title = "Bad requrest";
        next(err);
    };

    next();
};

module.exports = { handleValidationErrors };
