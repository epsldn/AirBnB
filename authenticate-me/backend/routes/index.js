//Import required packages
const express = require("express");

// Create router
const router = express.Router();

//TEST

router.get("/hello/world", (req, res, next) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    res.send("Hello World!");
});

module.exports = router;