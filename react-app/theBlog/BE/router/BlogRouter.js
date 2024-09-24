const express = require("express")
const router = express.Router()

const { register, signIn } = require("../controller/Controller")
console.log(typeof register);
console.log(typeof signIn);

router.route("/register").post(register);
router.route("/api/user/signin").post(signIn);

module.exports = router;