// MUI imports + other additional CSS
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Header from "../Header";
import "../../assets/styles/pages/NewBlog.css";

// React module imports
import axios from "axios";
import Footer from "../Footer";

const NewBlog = () => {
  const newBlog = (e) => {
    e.preventDEfault();
    axios
      .post("http://localhost:5000/blog", {
        blogTitle: e.target.elements.blogTitle.value,
        blogDescription: e.target.elements.blogDescription.value,
        imageURL: e.target.elements.imageURL.value,
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err.response.msg;
      });
  };
  return (
    <>
      <Header />
      <section>
        <div className="newBlog">
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
            action="http://localhost:5000/blog"
            onSubmit={(e) => newBlog(e)}
          >
            <h1>NEW BLOG</h1>
            <div className="blog-area">
              <div className="text-field-input">
                <TextField
                  required
                  id="blogTitle"
                  label="Title"
                  placeholder="Blog title"
                  name="blogTitle"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="text-field-input">
                <TextField
                  required
                  id="blogDescription"
                  label="Description"
                  placeholder="Blog description"
                  name="blogDescription"
                  style={{ width: "100%" }}
                  multiline
                  rows={4}
                />
              </div>
              <div className="text-field-input">
                <TextField
                  required
                  id="imageURL"
                  label="Image URL"
                  placeholder="Image URL"
                  name="imageURL"
                  style={{ width: "100%" }}
                />
              </div>
              <Button
                variant="contained"
                style={{ width: "100%", alignSelf: "center" }}
                type="submit"
              >
                Post
              </Button>
            </div>
          </Box>
        </div>
      </section>
    </>
  );
};

export default NewBlog;
