import jwt from "jsonwebtoken";

const checkToken = async (req, res, next) => {
  console.log(req.cookies);
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(403).redirect("http://localhost:3000/login");
  }
  try {
    jwt.verify(token, process.env.JWTSECRET, (err, result) => {
      void (err && res.status(403).send({ msg: "Access denied" })); // Ternary clause will not return else statement
      req.userID = result.id;
      req.email = result.email;
      req.username = result.username;
      next();
    });
  } catch (err) {
    res.status(403).send({ msg: "Access denied" });
  }
};

export default checkToken;
