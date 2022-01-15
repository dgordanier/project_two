require("dotenv").config();
/* ====== External Modules  ====== */
// Required External Modules
// all required code that is not our own
const express = require('express');
const methodOverride = require('method-override');

/* ====== Internal Modules  ====== */
// Required Internal Modules
// all code that is our code
const routes = require("./routes");

/* ====== Instanced Module  ====== */
// Create the Express app
const app = express();
// returns an object that is our server

	
/* ====== Middleware  ====== */ 
//(app.use)
//body data
app.use(express.urlencoded({extended: true}));
//method override
app.use(methodOverride("_method"));
//public files
app.use(express.static("public"));
//logger
app.use((req, res, next) => {
	console.log(req.url, req.method);
	next();
})

/* ====== System Variables  ====== */
const PORT = 4000; // full caps signify a config variable

/* ====== App Configuration  ====== */
// app.set
app.set("view engine", "ejs");

/* ====== Routes  ====== */
//Home Route
app.get("/", (req, res) => {
	res.render("index");
});

//404 Route
app.get((req, res) => {
	res.send("404! Error! Page not found.");
});

//Internal Routes
app.use("/products", routes.products);
app.use("/orders", routes.orders);
app.use("/customers", routes.customers);
	
/* ====== Server bind  ====== */
// bind the application to the port via app.listen(number, optional function to do after bind)
app.listen(PORT, function () {
	console.log(`All systems are a go on port http://localhost:${PORT}`);
});
