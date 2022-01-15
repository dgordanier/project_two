const router = require("express").Router();
const ctrl = require("../controllers");

router.get("/", ctrl.customers.idx);


module.exports = router;