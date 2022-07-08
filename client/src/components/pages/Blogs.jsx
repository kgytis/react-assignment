// MUI imports + other additional CSS
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import "../../assets/styles/pages/Blogs.css";
// React module imports
import { Link } from "react-router-dom";

//Custom hooks imports
import useFetch from "../../hooks/useFetch";

// Component imports
import Header from "../Header";

const baseURL = "http://localhost:5000/";

const Blogs = () => {
  const { data, error, isPending } = useFetch(`${baseURL}blogs`);
  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && (
        <article>
          <Header />
          <div className="card-container">
            {data.map((blog, i) => {
              return (
                <Card sx={{ maxWidth: 450, maxHeight: 600 }} key={`card-${i}`}>
                  <CardActionArea component={Link} to={`/blog/${blog.id}`}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={blog.imageURL}
                      alt={blog.blogTitle}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {blog.blogTitle}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {blog.blogDescription}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            })}
          </div>
        </article>
      )}
    </>
  );
};

export default Blogs;
