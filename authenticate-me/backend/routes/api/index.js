// Load required packages and files
const router = require("express").Router();

router.post("/test", (req, res, next) => {
    res.json({ requestBody: req.body });
});

module.exports = router;
