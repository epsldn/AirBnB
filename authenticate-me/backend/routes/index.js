//Import required packages
const express = require("express");

// Create router
const router = express.Router();
const apiRouter = require("./api");
//TEST

router.use("/api", apiRouter);

router.get("/api/csrf/restore", (req, res) => {
  const csrfToken = req.csrfToken();
  res.cookie("XSRF-TOKEN", csrfToken);
  res.status(200).json({
    'XSRF-Token': csrfToken
  });
});
module.exports = router;