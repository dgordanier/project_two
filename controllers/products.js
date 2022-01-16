const db = require("../models");

// Rest Routes
/*
 * Index - GET - /products  - Presentational - respond with all articles
 * New - GET - /products/new  - Presentational Form - a page with a form to create a new article
 * Show - GET - /products/:id  - Presentational - respond with specific article by id
 * Create - Post - /products  - Functional - recieve data from new route to create a article
 * Edit - GET - /products/:id/edit  - Presentational Form - respond with a form prefilled with article data
 * Update - PUT - /products/:id  - Functional - recieve data from edit to update a specific article
 * Delete - DELETE - /products/:id  - Functional - Deletes article by id from request
 */

const idx = (req, res) => {
    db.Product.find({}, function (err, allProducts) {
        if (err) return res.send(err);
        const context = {products: allProducts};
        return res.render("products", context);
    });
};



module.exports = {
  idx,
}