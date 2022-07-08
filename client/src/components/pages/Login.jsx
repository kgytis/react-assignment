// MUI imports + other additional CSS
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "../../assets/styles/pages/Login.css";

// React module imports
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const login = (e) => {
    e.preventDEfault();
    axios
      .post("http://localhost:5000/login", {
        username: e.target.elements.username.value,
        password: e.target.elements.password.value,
      })
      .then(() => <Navigate to="/blogs" />)
      .catch((err) => {
        return err.response.msg;
      });
  };
  return (
    <section>
      <div className="login">
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
          action="http://localhost:5000/login"
          onSubmit={(e) => login(e)}
        >
          <h1>LOGIN</h1>
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
                id="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
                name="password"
                style={{ width: "100%" }}
              />
            </div>
            <Button
              variant="contained"
              style={{ width: "100%", alignSelf: "center" }}
              type="submit"
            >
              LOGIN
            </Button>
            <div className="or-separator">
              <h3>OR</h3>
            </div>
            <div className="sign-up-redirect">
              <p>
                Need an account?{" "}
                <Link to="/register">
                  <span>SIGN UP</span>
                </Link>
              </p>
            </div>
          </div>
        </Box>
      </div>
    </section>
  );
};

export default Login;
