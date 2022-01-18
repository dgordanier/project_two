const router = require("express").Router();
const ctrl = require("../controllers");


router.get("/", ctrl.orders.idx);
router.get("/new", ctrl.orders.newOrder);
router.post("/", ctrl.orders.create);
router.delete("/:id", ctrl.orders.destroy);
router.put("/:id", ctrl.orders.update);
router.get("/:id/edit", ctrl.orders.edit);


module.exports = router;