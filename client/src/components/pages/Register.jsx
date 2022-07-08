// MUI imports + other additional CSS
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "../../assets/styles/pages/Register.css";

// React module imports
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const register = (e) => {
    e.preventDEfault();
    axios
      .post("http://localhost:5000/register", {
        username: e.target.elements.username.value,
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
        passwordRepeat: e.target.elements.passwordRepeat.value,
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err.response.msg;
      });
  };
  return (
    <section className="register-section">
      <div className="register">
        <Box
          component="form"
          noValidate
          autoComplete="off"
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          method="POST"
          action="http://localhost:5000/register"
          onSubmit={(e) => register(e)}
        >
          <h1>SIGN-UP</h1>
          <div className="password-and-username-area">
            <div className="text-field-input">
              <TextField
                required
                id="username"
                label="Username"
                placeholder="Enter your username"
                name="username"
                style={{ width: "100%" }}
              />
            </div>
            <div className="text-field-input">
              <TextField
                required
                id="email"
                label="Email"
                placeholder="example@example.com"
                name="email"
                style={{ width: "100%" }}
              />
            </div>
            <div className="text-field-input">
              <TextField
                required
                id="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
                name="password"
                style={{ width: "100%" }}
              />
            </div>
            <div className="text-field-input">
              <TextField
                required
                id="passwordRepeat"
                label="Repeat password"
                type="password"
                placeholder="Repeat your password"
                name="passwordRepeat"
                style={{ width: "100%" }}
              />
            </div>
            <Button
              variant="contained"
              style={{ width: "100%", alignSelf: "center" }}
              type="submit"
            >
              Sign-up
            </Button>
            <div className="or-separator">
              <h3>OR</h3>
            </div>
            <div className="sign-up-redirect">
              <p>
                Already user?{" "}
                <Link to="/login">
                  <span>LOGIN</span>
                </Link>
              </p>
            </div>
          </div>
        </Box>
      </div>
    </section>
  );
};

export default Register;
