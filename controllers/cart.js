const { response } = require("express");
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
    console.log(req.params.id)

    const { productId } = req.params.id;

    res.cookie
    

    
    
};



module.exports = {
    addToCart,
}