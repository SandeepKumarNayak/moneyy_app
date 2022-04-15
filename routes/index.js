const express = require("express");

const router = express.Router();

//Routes

router.use("/v1/products", require("./productRoute"));
router.use("/v1/review", require("./reviewRoute"));
module.exports = router;
