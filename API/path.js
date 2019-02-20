const express = require("express");
const router = express.Router();
const Controller = require("../controller/controller");

router.post('/',Controller.getPath);
router.get('/',Controller.getHash)

module.exports = router;