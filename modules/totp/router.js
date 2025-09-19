const express = require("express");
const router = express.Router();
const totpController = require("./controller");

router.get("/generate/secret", totpController.generateSecret);

router.post("/generate", totpController.getTOTP);

module.exports = router;
