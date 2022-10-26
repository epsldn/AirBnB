// Import the required packages and files
const express = require("express");
require("express-async-errors");
const morgan = require("morgan");
const cors = require('cors');
const csurf = require("csurf");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const { ValidationError } = require("sequelize");

// Check for working environment
const { environment } = require("./config");
const isProduction = environment === "production";

// Initialize Express
const app = express();
// Stop errors from favicon.ico not being found
app.get("/favicon.ico", (req, res) => res.status(204));
//Connect middleware
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());
if (!isProduction) app.use(cors());
app.use(
    helmet.crossOriginResourcePolicy({
        policy: "cross-origin"
    })
);
app.use(
    csurf({
        cookie: {
            secure: isProduction,
            sameSite: isProduction && "Lax",
            httpOnly: true
        }
    })
);
app.use(routes);

// Route not found
app.use((req, res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.title = "Resource Not Found";
    err.errors = ["The requested resource couldn't be found"];
    err.status = 404;
    next(err);
});

// check if error was Validation Error thrown out by sequelize
app.use((err, req, res, next) => {
    console.log(err);
    if (err instanceof ValidationError) {
        console.log(err)
        err.errors = { [err.errors[0].path]: err.errors[0].message };
        err.status = 403;
        err.message = "User already exists";
    }
    next(err);
});

//Error formatter

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    console.error(err);

    const data = {
        statusCode: err.status,
        message: err.message,
        errors: err.errors,
    };

    console.log(err.stack);
    if (!isProduction) data.stack = err.stack;

    res.json(data);

});
module.exports = app;
