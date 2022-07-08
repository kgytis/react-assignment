// MUI imports + other additional CSS
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../../assets/styles/pages/Blog.css";

// React module imports
import { useParams } from "react-router-dom";
//Custom hooks imports
import useFetch from "../../hooks/useFetch";

// Custom hooks imports
import Header from "../Header";

const Blog = () => {
  const paramsURL = useParams();
  const params = paramsURL.id;
  const { data, error, isPending } = useFetch(
    `http://localhost:5000/blog/${params}`
  );

  return (
    <>
      <Header />
      <article>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {data && (
          <div className="one-blog">
            <Card sx={{ maxWidth: 1500, maxHeight: 1200 }}>
              <CardMedia
                component="img"
                height="800"
                image={data.imageURL}
                alt={data.blogTitle}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.blogTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.blogDescription}
                </Typography>
              </CardContent>
            </Card>
          </div>
        )}
      </article>
    </>
  );
};

export default Blog;
