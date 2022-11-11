//Import required packages
const express = require("express");
// Create router
const router = express.Router();
//Import api router
const apiRouter = require("./api");

router.use("/api", apiRouter);

if (process.env.NODE_ENV === "production") {
  const path = require("path");
  // Serve the frontend"s index.html file at the root route
  router.get("/", (req, res) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    return res.sendFile(
      path.resolve(__dirname, "../../frontend", "build", "index.html")
    );
  });

  // Serve the static assets in the frontend"s build folder
  router.use(express.static(path.resolve("../frontend/build")));

  // Serve the frontend's index.html file at all other routes NOT starting with /api
  router.get(/^(?!\/?api).*/, (req, res) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    return res.sendFile(
      path.resolve(__dirname, "../../frontend", "build", "index.html")
    );
  });
} else {
  router.get("/api/csrf/restore", (req, res) => {
    const csrfToken = req.csrfToken();
    res.cookie("XSRF-TOKEN", csrfToken);
    return res.json({ "XSRF-TOKEN": csrfToken });
  });
}

module.exports = router;