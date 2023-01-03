const express = require("express");
const router = express.Router();
const admincontroller = require("../controllers/adminController");

router.get("/login/:email/:password", admincontroller.login);
router.post("/updatepass", admincontroller.updatePassword);

module.exports = router;