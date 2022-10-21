// Load required packages and files
const router = require("express").Router();
const { setTokenCookie } = require("../../utils/auth.js");
const { User } = require("../../db/models");
const { restoreUser } = require("../../utils/auth.js");
const { requireAuth } = require("../../utils/auth.js");
// Test Routes
router.use(restoreUser);
router.post("/test", (req, res, next) => {
    res.json({ requestBody: req.body });
});

router.get("/set-token-cookie", async (_req, res) => {
    const user = await User.findOne({
        where: {
            username: "Demo-lition"
        }
    });

    setTokenCookie(res, user);

    return res.json({ user });
});

router.get("/restore-user", (req, res) => res.json(req.user));

router.get("/require-auth", requireAuth, (req, res) => res.json(req.user));

module.exports = router;
