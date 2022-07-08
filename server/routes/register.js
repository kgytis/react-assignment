import express from "express";

//Controllers imports
import { newUser } from "../controllers/auth/register.js";
//Middleware imports
import registerValidation from "../middleware/register.js";

const registerRouter = express.Router();

registerRouter.post("/", registerValidation, newUser);

export default registerRouter;
