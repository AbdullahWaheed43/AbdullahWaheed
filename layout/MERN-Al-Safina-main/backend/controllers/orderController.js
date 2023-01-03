const orderSchema = require("../models/orderSchema")

const addOrder = async (req, res) => {
    const { cart, user, total } = req.body;

    //console.log(cart)

    const newOrder = new orderSchema({
        order: cart,
        user: user,
        total: total,
        status: 1,
    });
    //console.log(newOrder)
    try {
        await newOrder.save();
    } catch (err) {
        res.status(400).json({ error: "Could not add", errorDetail: err });
        return
    }

    res.status(201).json({ message: req.body });
};

const activeOrder = async (req, res) => {
    let order;
    //console.log(req.params.id)
    try {
        order = await orderSchema.find({ user: req.params.id, status: 1 })
    } catch (err) {
        res.status(400).json({ error: "Error", errorDetail: err });
        return
    }
    res.status(201).json({ activeOrder: order });
}

const allActiveOrder = async (req, res) => {
    let order;
    //console.log(req.params.id)
    try {
        order = await orderSchema.find({ status: 1 }).populate('user').exec()
    } catch (err) {
        res.status(400).json({ error: "Error", errorDetail: err });
        return
    }
    res.status(201).json({ activeOrder: order });
}

const allOrderHistory = async (req, res) => {
    let order;
    //console.log(req.params.id)
    try {
        order = await orderSchema.find({ status: { $lt: 1 } }).populate('user').exec()
    } catch (err) {
        res.status(400).json({ error: "Error", errorDetail: err });
        return
    }
    res.status(201).json({ activeOrder: order });
}

const orderStatus = async (req, res) => {
    let order;
    const status = req.params.status
    const oid = req.params.oid
    //console.log(req.params.id)
    try {
        order = await orderSchema.findByIdAndUpdate(oid,{ status: status })
    } catch (err) {
        res.status(400).json({ error: "Error", errorDetail: err });
        return
    }
    res.status(201).json({ message: "Updated" });
}

const orderHistory = async (req, res) => {
    let order;
    //console.log(req.params.id)
    try {
        order = await orderSchema.find({ user: req.params.id, status: 0 })
    } catch (err) {
        res.status(400).json({ error: "Error", errorDetail: err });
        return
    }
    res.status(201).json({ activeOrder: order });
}

exports.addOrder = addOrder
exports.activeOrder = activeOrder
exports.orderHistory = orderHistory
exports.allActiveOrder = allActiveOrder
exports.allOrderHistory = allOrderHistory
exports.orderStatus = orderStatus