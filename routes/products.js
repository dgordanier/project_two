const router = require("express").Router();
const ctrl = require("../controllers");


router.get("/", ctrl.products.idx);
router.get("/new", ctrl.products.new);
router.post("/", ctrl.products.create);
router.get("/:id/edit", ctrl.products.edit);
router.delete("/:id", ctrl.products.destroy);
router.put("/:id", ctrl.products.update);

module.exports = router;