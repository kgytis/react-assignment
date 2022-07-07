import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"; // For JWT storing

// Routes imports

//API Routes
import apiBlogsRouter from "./routes/blogs.js";

// Auth routes
import registerRouter from "./routes/register.js";
import loginRouter from "./routes/login.js";
import logoutRouter from "./routes/logout.js";

// UI routes
const app = express();
const port = process.env.PORT;

// Cors setup
const corsOptions = {
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  optionSucessStatus: 200,
};

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header("Content-Type", "application/json;charset=UTF-8");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Routes usage
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/", apiBlogsRouter);
app.use("/blogs", apiBlogsRouter);

app.listen(port, () => {
  console.log(`Server is running on PORT http://localhost:${port}`);
});
