// Load required packages and files
const router = require("express").Router();
const { setTokenCookie } = require("../../utils/auth.js");
const { User } = require("../../db/models");
const { restoreUser } = require("../../utils/auth.js");
const { requireAuth } = require("../../utils/auth.js");
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const spotsRouter = require("./spots.js");
const reviewRouter = require("./reviews.js");
const bookingsRouter = require("./bookings.js");
// Test Routes
router.use(restoreUser);
router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/spots", spotsRouter);
router.use("/reviews", reviewRouter);
router.use("/bookings", bookingsRouter);
router.get("/test", (req, res, next) => {
    res.json({ requestBody: req.body });
});

module.exports = router;
