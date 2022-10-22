const express = require("express");
const { setTokenCookie, requireAuth } = require("../../utils/auth.js");
const { User } = require("../../db/models");
const router = express.Router();

router.post("/", async (req, res, next) => {
    console.log("HERE")
    const { email, password, username } = req.body;
    console.log(username);
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({ user });
});

module.exports = router;