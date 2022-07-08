// MUI imports + other additional CSS
import logo from "../assets/images/logo.png";
import "../assets/styles/Header.css";
// React module imports
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDEfault();
    axios
      .get("http://localhost:5000/logout", {})
      .then(() => navigate("/login"))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <header>
      <nav>
        <div>
          <Link to="/blogs">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <ul>
          <Link to="/blogs">
            <li>All Blogs</li>
          </Link>
          <Link to="/newBlog">
            <li>Add New Blog</li>
          </Link>
          <li>
            <form
              method="GET"
              action="http://localhost:5000/logout"
              onSubmit={(e) => logout(e)}
            >
              <input type="submit" value="Logout" />
            </form>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
