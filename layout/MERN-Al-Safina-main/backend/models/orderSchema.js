const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = Schema({
    order: [{
        name: { type: String },
        price: { type: String },
        quantity: { type: String },
    }],
    total: { type: String },
    status: { type: Number },
    user: { type: mongoose.Types.ObjectId, required: true, ref: "User" }
},
    { timestamps: true })

module.exports = mongoose.model("order", orderSchema);