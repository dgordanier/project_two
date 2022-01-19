const { cart } = require(".");
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
    // let cartItemId = ""


   

    
   

    db.Product.findById(productId, function (err, product){
        
        if(err) return res.send(err);
        if(product){

            console.log(product)

            // db.Cart.create(product.body, function (err, objectCreated){
            //     if (err) return res.send(err);
            //     if (objectCreated){
            //         cartItemId = objectCreated._id;
            //         // console.log(cartItemId);
            //         db.Cart.findByIdAndUpdate({_id: cartItemId}, {$push:{items:product.body}}, {new: true}, (err, doc) => {
            //             if(err){
            //                 console.log(err)
            //             }
            //             console.log(doc)
            //         })
            //         // db.Cart.findByIdAndUpdate( function (err, objectUpdated){
            //         //     {_id:cartItemId},
            //         //     {
            //         //         $push:{
            //         //             items:product
            //         //         }
            //         //     })
            //         // }
                        
            //         // if(!err) return res.send("success");
            //     } 
            // });
            // console.log(cartItemId);
            // db.Cart.findByIdAndUpdate(
            //     {_id: cartItemId},
            //     { 
            //         $push: { 
            //             items: product
            //         } 
            //     },

            //     (err, updatedProduct) => {
            //         if(err) return res.send(err);
                   
            //         // return res.redirect();
            //       }
            // )
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