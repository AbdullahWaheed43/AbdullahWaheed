const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController")

router.post("/add", cartController.addItem);
router.get("/get/:id", cartController.getCartByID)
router.delete("/deletebyid/:id", cartController.deletebyid)


module.exports = router;