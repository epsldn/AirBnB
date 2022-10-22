// Import required files / packages
const express = require("express");
const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { User } = require("../../db/models");
const router = express.Router();

router.get("/", restoreUser, (req, res, next) => {
    const { user } = req;
    if (user) {
        return res.json({
            user: user.toSafeObject()
        });
    } else return res.json({});
});

router.post("/", async (req, res, next) => {
    const { credential, password } = req.body;
    const user = await User.login({ credential, password });

    if (!user) {
        const err = new Error("Login failed");
        err.status = 401;
        err.title = "Login failed";
        err.errors = ["the provided credentials were invalid"];
        return next(err);
    }

    await setTokenCookie(res, user);

    return res.json({ user });
});

router.delete("/", (req, res, next) => {
    res.clearCookie("token");
    return res.json({ message: "success" });
});

module.exports = router;
