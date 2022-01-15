const router = require("express").Router();
const ctrl = require("../controllers");

router.get("/", ctrl.orders.idx);

module.exports = router;