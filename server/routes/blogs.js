import express from "express";

//Controllers imports
import { allBlogs, blogByID, newBlog } from "../controllers/API/blogs.js";

// Checktoken import
import checkToken from "../middleware/checkToken.js";

const apiBlogsRouter = express.Router();

apiBlogsRouter.get("/blogs", checkToken, allBlogs);
apiBlogsRouter.get("/blog/:id", checkToken, blogByID);
apiBlogsRouter.post("/blog", checkToken, newBlog);

export default apiBlogsRouter;
