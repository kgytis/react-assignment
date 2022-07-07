import axios from "axios";

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

export { allBlogs, blogByID };
