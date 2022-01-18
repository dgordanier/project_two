const { Product } = require("../models");
const db = require("../models");

// Rest Routes
/*
 * Index - GET - /cart  - Presentational - respond with all articles
 * New - GET - /cart/new  - Presentational Form - a page with a form to create a new article
 * Show - GET - /cart/:id  - Presentational - respond with specific article by id
 * Create - Post - /cart  - Functional - recieve data from new route to create a article
 * Edit - GET - /cart/:id/edit  - Presentational Form - respond with a form prefilled with article data
 * Update - PUT - /cart/:id  - Functional - recieve data from edit to update a specific article
 * Delete - DELETE - /cart/:id  - Functional - Deletes article by id from request
 */

//add to cart function
const addToCart = (req, res) => {
    console.log("Hello")
    const productId = req.params.id;
    let cartItemId = ""


    db.Cart.create(req.body, function (err, objectCreated){
        if (err) return res.send(err);
        if (objectCreated){
            cartItemId = objectCreated._id;
            return cartItemId;
        } 
    });

    
    console.log(productId);
   

    db.Product.findById(productId, function (err, product){
        
        if(err) return res.send(err);
        if(product){
            db.Cart.findByIdAndUpdate(
                cartItemId,
                { 
                    $push: { 
                        items: {
                        "name" : "Hasan",
                        "price" : product.price,
                        }  
                    } 
                },

                (err, updatedProduct) => {
                    if(err) return res.send(err);
                   
                    // return res.redirect();
                  }
            )
        };
    });

    //const cart = db.Cart.create(req.session.cart ? req.session.cart : {});

    // db.Product.findById(productId, function (err, product) {
    //     if(err) return res.send(err);
    //     cart.add(product, product.id);
    //     req.session.cart = cart;
    //     console.log(req.session.cart);
    //     res.redirect("/products");
    // })

}



module.exports = {
    addToCart,
}