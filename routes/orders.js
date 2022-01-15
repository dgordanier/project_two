const router = require("express").Router();
const ctrl = require("../controllers");

router.get("/", ctrl.orders.idx);
router.get("/", ctrl.customers.idx);

module.exports = router;