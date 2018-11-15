const express = require("express");
const router = express.Router();
const Controller = require("../controller/controller");

router.post('/',Controller.getPath);

module.exports = router;