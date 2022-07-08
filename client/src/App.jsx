// Pages imports
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Blogs from "./components/pages/Blogs";
import Blog from "./components/pages/Blog";
// Router imports
import { Routes, Route } from "react-router-dom";
import NewBlog from "./components/pages/NewBlog";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/newBlog" element={<NewBlog />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
