const express = require('express');
const router = express.Router();
const informationControl = require("../controllers/informations");


router.get("/", informationControl.showAll);

module.exports = router;
