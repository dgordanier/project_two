const router = require("express").Router();
const ctrl = require("../controllers/cart");

//router.get("/add-to-cart/:id", ctrl.addToCart);
router.post("/:id", ctrl.addToCart);
// router.post("/add-to-cart/:id", ctrl.cart.postToCart)


module.exports = router; 
