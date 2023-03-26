import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import adminRouter from "./routes/adminRoutes.js";
import userRouter from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

mongoose.connect("mongodb://localhost:27017/digiblock").then((data, err) => {
  err
    ? console.log("database is not connected", err)
    : console.log("database is connected");
});

app.use(morgan("dev"));
app.use(helmet());
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  console.log("server is running");
});
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);

// error handling
app.use((req, res, next) => {
  const error = new Error("NOT FOUND");
  error.status = 404;
  next(error);
});
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went to wong!";
  return res
    .status(errorStatus)
    .json({
      succes: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
});

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  console.log(`server started on port number ${PORT}`);
});
