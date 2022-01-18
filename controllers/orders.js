const db = require ("../models");

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

// index route
const idx = (req, res) => {
    db.Order.find({}, function (err, allOrders) {
        if (err) return res.send(err);
        const context = {orders: allOrders};
        return res.render("orders/index", context);
    });
};

//new order page
const newOrder = (req, res) => {
  res.render("orders/new");
};

//create order function
const create = (req, res) => {
    db.Order.create(req.body, function(err, createdOrder) {
      if(err) return res.send(err);
      return res.redirect("/orders");
    });
};

//edit order function
const edit = (req, res) => {
  db.Order.findById(req.params.id, (err, foundOrder) => {
    if(err) return res.send(err);
    const context = {order: foundOrder};
    return res.render("orders/edit", context);
  });
};

//update order function
const update = (req, res) => {
  db.Order.findByIdAndUpdate(
        req.params.id,
        
        {
          $set: {
            name: req.body.name,
            email: req.body.email,
            street: req.body.street,
            unit: req.body.unit,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            cardNumber: req.body.cardNumber,
            exp: req.body.exp,
            cvv: req.body.cvv,
          },
        },
        {new: true},
        
        (err, updatedOrder) => {
          if(err) return res.send(err);
          
          return res.redirect("/orders");
        }
  );
};

//delete order function
const destroy = (req, res) => {
  db.Order.findByIdAndDelete(req.params.id, (err, deletedOrder) => {
    if(err) return res.send(err);
    return res.redirect("/orders")
  });
};

module.exports = {
   idx, 
   newOrder,
   create,
   edit,
   update,
   destroy,
};