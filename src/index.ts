import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

import routes from "./routes";

// configure dotenv
dotenv.config();

// setup app & port variable
const app = express();
const PORT = process.env.PORT || 8080;

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded());

// database connection
mongoose.connect(process.env.MONGODB_URL, {autoIndex: false}, (err) => {
  if (err) throw err;
  console.log("Database Connection Successful.");
});

// setup router
app.use("/api", routes);

// set app
app.listen(PORT, () => {
  console.log(`Application Listening on http://localhost:${PORT}`);
});
