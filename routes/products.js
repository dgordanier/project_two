const router = require("express").Router();
const ctrl = require("../controllers");


router.get("/", ctrl.products.idx);
router.get("/new", ctrl.products.new);
router.post("/", ctrl.products.create);
router.delete("/:id", ctrl.products.destroy);
router.put("/:id", ctrl.products.update);
router.get("/:id/edit", ctrl.products.edit);
router.put("/:id/add", ctrl.products.select);
router.put("/:id/remove", ctrl.products.unselect);

module.exports = router;