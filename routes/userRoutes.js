const router = require("express").Router();
const { registerUser, sendHi } = require("../controllers/userController.js");

//GET

//POST
router.post("/register", registerUser);

module.exports = router;