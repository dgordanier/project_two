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
// index route
const idx = (req, res) => {
    db.Product.find({}, function (err, allProducts) {
        if (err) return res.send(err);
        const context = {products: allProducts};
        return res.render("products/index", context);
    });
};

//new product page
const newProduct = (req, res) => {
  res.render("products/new");
}

//create product function
const create = (req, res) => {
    db.Product.create(req.body, function(err, createdProduct) {
      if(err) return res.send(err);
      return res.redirect("/products");
    });
};

//edit product function
const edit = (req, res) => {
  db.Product.findById(req.params.id, (err, foundProduct) => {
    if(err) return res.send(err);
    const context = {product: foundProduct};
    return res.render("products/edit", context);
  })
}

//update product function
const update = (req, res) => {
  db.Product.findByIdAndUpdate(
        req.params.id,
       
        {
          $set: {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
          },
        },
        {new: true},
       
        (err, updatedProduct) => {
          if(err) return res.send(err);
         
          return res.redirect(`/products/`);
        }
  );
};

//delete product function
const destroy = (req, res) => {
  db.Product.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
    if(err) return res.send(err);
    return res.redirect("/products")
  });
};

const select = (req, res) => {
  db.Product.findByIdAndUpdate(req.params.id, 
    {
      $set: {
        isAddedToOrder: true,
      },
  },
  {new: true},
  (err, updatedList) => {
    if(err) return res.send(err);
    return res.redirect('/products/');
  }
);

};




module.exports = {
  idx,
  new: newProduct,
  create,
  edit,
  update,
  destroy,
  select,
}