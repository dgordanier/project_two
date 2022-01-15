//Seed File 
// require("dotenv").config();
// const mongoose = require('mongoose');
// const Product = require("./models/Product");
// const db = mongoose.connection;
// const dbUrl = process.env.DATABASE_URL;

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
//                 description: "COVID-19 Antigen Self Test (2 Tests)",
//                 rating: 4, 
            
//             },
//             {
//                 name: "Surgical Face Mask 10 Pack",
//                 price: 10.99,
//                 description: "General face mask that covers wearer's nose and mouth. Contains 10 pieces.",
//                 rating: 3,  
//             },
//             {
//                 name: "Medical Gloves",
//                 price: 5.99,
//                 description: "100% synthetic nitrile, powder and latex free, non-sterile gloves. Contains 15 pieces.",
//                 rating: 3,  
//             },
//             {
//                 name: "N95 Respirator Mask",
//                 price: 15.99,
//                 description: "Specialized mask that filters airborne particles. Contains 1 mask per order.",
//                 rating: 5,  
//             },
//             {
//                 name: "Hazmat Suit",
//                 price: 49.99,
//                 description: "Breathable, soft, cloth-like fabric that protects against dirt, grime, and non hazardous dry dust.",
//                 rating: 4,  
//             },
//         ]
//     )