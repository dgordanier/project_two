const db = require("../models");

// Rest Routes
/*
 * Index - GET - /articles  - Presentational - respond with all articles
 * New - GET - /articles/new  - Presentational Form - a page with a form to create a new article
 * Show - GET - /articles/:id  - Presentational - respond with specific article by id
 * Create - Post - /articles  - Functional - recieve data from new route to create a article
 * Edit - GET - /articles/:id/edit  - Presentational Form - respond with a form prefilled with article data
 * Update - PUT - /articles/:id  - Functional - recieve data from edit to update a specific article
 * Delete - DELETE - /articles/:id  - Functional - Deletes article by id from request
 */

const idx = (req, res) => {
    db.Product.find({}, (err, foundProducts) => {
        if (err) return res.send(err);
        const context = {products: foundProducts};
        res.render("products/index", context)
    })
}


module.exports = {
    idx, 
}