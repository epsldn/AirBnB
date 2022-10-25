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
    if (err instanceof ValidationError) {
        err.errors = err.errors.map(err => err.message);
        err.title = "Validation Error";
    }
    next(err);
});

//Error formatter

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    console.error(err);

    res.json({
        title: err.title || "Server Error",
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack
    });

});
module.exports = app;
