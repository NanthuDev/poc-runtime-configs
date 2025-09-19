const express = require("express");
const router = express.Router();
const totpController = require("./controller");

router.get("/generate/secret", totpController.generateOtp);

router.get("/generate", totpController.generateOtp);

module.exports = router;
