const express = require("express");
const router = express.Router();
const userController = require("./controller");

router.get("/", userController.getUsers);

router.get("/config", userController.getUsers);

module.exports = router;
