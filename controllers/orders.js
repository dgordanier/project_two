const db = require ("../models")

// Rest Routes as a guide
/*
 * Index - GET - /orders - Presentational - respond with found orders
 * New - GET - /orders/new  - Presentational Form - a page with a form to create a new order
 * Show - GET - /orders/:id  - Presentational - respond with specific order by id 
 * Create - Post - /orders - Functional - recieve data from new route to create an order
 * Edit - GET - /orders/:id/edit  - Presentational Form - respond with a form prefilled with order data
 * Update - PUT - /orders/:id  - Functional - recieve data from edit to update a specific order
 * Delete - DELETE - /orders/:id  - Functional - Deletes order by id from request
 */

const idx = (req, res) => {
    db.Order.find({}. function (err, foundOrders) => {
        if (err) return res.send (err);
        const context = {orders: foundOrders};
        res.render("orders/index", context)
    })
};

module.exports = {
    idx,
};