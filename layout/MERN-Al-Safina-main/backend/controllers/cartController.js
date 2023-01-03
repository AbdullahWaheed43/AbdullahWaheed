const cartSchema = require("../models/cartSchema")
const HttpError = require("../models/HttpError");

const addItem = async (req, res) => {
    const { cart, user } = req.body;

    try {
        await cartSchema.deleteMany({ user: user })
    } catch (error) {
        console.log(error)
    }

    const newItem = new cartSchema({
        cart: cart,
        user: user,
    });

    try {
        await newItem.save();
    } catch (err) {
        res.status(400).json({ error: "Could not add", errorDetail: err });
        return
    }

    res.status(201).json({ message: "Added to Cart" });
};

const getCartByID = async (req, res, next) => {
    const id = req.params.id;

    let items
    try {
        items = await cartSchema.findOne({ user: id })
    } catch (err) {
        const error = new HttpError("Could not find a User for that id", 500); // for Sync function
        return next(error);
    }

    res.status(201).json({ cart: items });
};

const deletebyid = async (req, res) => {
    const id = req.params.id
    try {
        await cartSchema.deleteMany({ user: id })
    } catch (error) {
        console.log(error)
    }
    res.json({ message: "Items deleted" })
}

exports.addItem = addItem
exports.getCartByID = getCartByID
exports.deletebyid = deletebyid