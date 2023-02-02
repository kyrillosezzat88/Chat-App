const express = require("express");
const { signup, Login } = require("../controllers/auth");
const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", Login);

module.exports = authRouter;
