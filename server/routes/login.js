import express from "express";

//Controllers imports
import { loginUser } from "../controllers/auth/login.js";
//Middleware imports
import loginValidation from "../middleware/login.js";

const loginRouter = express.Router();

loginRouter.post("/", loginValidation, loginUser);

export default loginRouter;
