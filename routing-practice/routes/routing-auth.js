const express = require('express');
const router = express.Router();

const {register, login, forgotpasssword, resetpassword} = require('../controllers/auth');

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgotpassword").post(forgotpasssword);
router.route("/resetpassword/:resetToken").put(resetpassword);



module.exports=router;