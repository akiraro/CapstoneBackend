const express = require("express");
const router = express.Router();
const Controller = require("../controller/controller");

router.post('/', Controller.getPath);
router.post('/getDirection', Controller.getDirection)

module.exports = router;