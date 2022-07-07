//Fetch related imports
import axios from "axios";
import { v4 as uuid } from "uuid";
//Encryption related imports
import bcrypt from "bcryptjs";

const DB = process.env.DB;

const newUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 5); // Password hasing <--hashed 5 times
    const registerTime = new Date().toLocaleString("LT");
    const ID = uuid();
    axios
      .post(`${DB}/userInfo`, {
        id: ID,
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
        timeStamp: registerTime,
      })
      .then(() => {
        res.send("Succesfully registered!");
      })
      .catch((err) => {
        res.status(400).send({ msg: err });
      });
  } catch (err) {
    return res.status(500).send({ msg: err });
  }
};

export { newUser };
