import express from "express";

//Controllers imports
import { allBlogs, blogByID } from "../controllers/API/blogs.js";

// Checktoken import
import checkToken from "../middleware/checkToken.js";

const apiBlogsRouter = express.Router();

apiBlogsRouter.get("/blogs", checkToken, allBlogs);
apiBlogsRouter.get("/blogs/:id", checkToken, blogByID);

export default apiBlogsRouter;
