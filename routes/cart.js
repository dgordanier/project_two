const router = require("express").Router();
const ctrl = require("../controllers");

router.post("/:id", ctrl.cart.addToCart);
// router.post("/add-to-cart/:id", ctrl.cart.postToCart)


module.exports = router;

