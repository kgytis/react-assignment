const logoutUser = async (req, res) => {
  try {
    return res
      .clearCookie("accessToken")
      .status(200)
      .redirect("http://localhost:3000/login");
  } catch (err) {
    res.send({ err: err });
  }
};

export default logoutUser;
