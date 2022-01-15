const router = require("express").Router();
const ctrl = require("../controllers");

router.get("/", ctrl.products.idx);


module.exports = router;