const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/user_controller");

router.get("/login/:email/:password", user_controller.login);
router.post("/adduser", user_controller.register);
router.patch("/updateuser",user_controller.updateUser)
router.get("/byid/:id", user_controller.getUser);
router.get("/getall", user_controller.getAllUser);

module.exports = router;