import axios from "axios";
import { v4 as uuid } from "uuid";
const DB = process.env.DB;

const allBlogs = async (req, res) => {
  try {
    axios
      .get(`${DB}/blogs`)
      .then((response) => res.send(response.data))
      .catch((err) => {
        res.status(400).send({ msg: err });
      });
  } catch (err) {
    res.send({ err: err });
  }
};

const blogByID = async (req, res) => {
  try {
    axios
      .get(`${DB}/blogs/${req.params.id}`)
      .then((response) => res.send(response.data))
      .catch((err) => {
        res.status(400).send({ msg: err });
      });
  } catch (err) {
    res.send({ err: err });
  }
};

const newBlog = async (req, res) => {
  try {
    const creationTime = new Date().toLocaleString("LT");
    const ID = uuid();
    axios
      .post(`${DB}/blogs`, {
        id: ID,
        blogTitle: req.body.blogTitle,
        blogDescription: req.body.blogDescription,
        imageURL: req.body.imageURL,
        timeStamp: creationTime,
      })
      .then(() => {
        res.redirect("http://localhost:3000/blogs");
      })
      .catch((err) => {
        res.status(400).send({ msg: err });
      });
  } catch (err) {
    return res.status(500).send({ msg: err });
  }
};

export { allBlogs, blogByID, newBlog };
