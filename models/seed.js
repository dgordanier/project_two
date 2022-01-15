require("dotenv").config();
const mongoose = require('mongoose');
const Product = require("./models/Product");
const db = mongoose.connection;
const dbUrl = process.env.DATABASE_URL;

// mongoose
//     .connect(dbUrl)
//     .then(() =>
//         console.log(
//             `MongoDB successfully connected at ${db.host}:${db.port}`
//         )
//     )
//     .catch((err) => console.log(`MongoDB connection failed Error: ${err} `));


//     Product.insertMany(
//         [
//             {
//                 name: "COVID Test Kit",
//                 price: 29.99,
//                 description: "COVID-19 Antigen Self Test by Abbott (2 Tests): Discover the fast, proven and trusted COVID-19 antigen test that is readily available over-the-counter at retailers across the country. Perform the test with a simple nasal swab in the comfort and convenience of your home. ",
//                 rating: {type: int, required: true}, 
//                 image: "https://www.cnet.com/a/img/sHlnou_qezIKXPa261kkyvap7L0=/940x0/2022/01/03/42f96597-2a8a-4013-95c5-f8c2e040b0ae/at-home-rapid-test-kit-covid-19-2022-cnet-shortage-find002.jpg",
//             },

//             {
                
//             }
//         ]
//     )