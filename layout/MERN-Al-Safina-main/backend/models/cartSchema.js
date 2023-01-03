const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartSchema = Schema({
    cart: [{
        name: { type: String },
        price: { type: String },
        quantity: { type: String },
    }],
    user: { type: mongoose.Types.ObjectId, required: true, ref: "User" }

})

module.exports = mongoose.model("cart", cartSchema);
// User is a name of Collection in DB