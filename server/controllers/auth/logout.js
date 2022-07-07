const logoutUser = async (req, res) => {
  try {
    //return res.clearCookie('accessToken').status(200).send({ msg: "You have been logged out successfully." })
    return res
      .clearCookie("accessToken")
      .status(200)
      .send("Succesfully logged out!");
  } catch (err) {
    res.send({ err: err });
  }
};

export default logoutUser;
