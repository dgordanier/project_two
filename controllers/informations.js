const db = require("../models/Information")

const showAllInformations = (req,res) => {
    res.render("informations", {
        informations: db.getAll(),
        time: req.time
    })
}

module.exports = {
    showAll: showAllInformations,
}
