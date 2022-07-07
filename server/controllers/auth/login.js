//Fetch realated imports
import axios from "axios";

// Enryption related imports
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const DB = process.env.DB;

const loginUser = async (req, res) => {
  try {
    axios
      .get(`${DB}/userInfo?username=${req.body.username}`)
      .then((response) => {
        loginCheck(response.data);
      })
      .catch((err) => {
        res.status(400).send({ msg: err });
      });

    // Password checking (user input vs DB info)
    const loginCheck = async (data) => {
      const match = await bcrypt.compare(req.body.password, data[0].password); // cia reik ideti tai, ka paget'inu is json
      // Token creation
      if (match) {
        // If user input matched with DB info, JWT token created
        const token = jwt.sign(
          {
            // what information is stored within JWT
            id: data[0].id,
            email: data[0].email,
            username: data[0].name,
          },
          process.env.JWTSECRET,
          { expiresIn: "1d" }
        ); // If time will allow, prepare token refreshing
        res.cookie("accessToken", token, { httpOnly: true });
        console.log(token);
        res.send(token);
        // res.redirect('/user');
      } else
        return res.status(400).send({ err: "Incorrect username or password." });
    };
  } catch (err) {
    res.status(500).send({ err: "Server error" });
  }
};

export { loginUser };
