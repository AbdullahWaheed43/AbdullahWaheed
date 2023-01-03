const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController")

router.post("/add", orderController.addOrder)
router.get("/allactive", orderController.allActiveOrder)
router.get("/allhistory", orderController.allOrderHistory)
router.get("/active/:id", orderController.activeOrder)
router.get("/history/:id", orderController.orderHistory)
router.get("/status/:oid/:status", orderController.orderStatus)

module.exports = router;