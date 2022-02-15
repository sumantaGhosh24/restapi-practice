import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded());

mongoose.connect(process.env.MONGODB_URL, {autoIndex: false}, (err) => {
    if(err) throw err;
    console.log("Database Connection Successful.")
})

app.get("/", (req, res) => {
  res.json({msg: "Its working"});
});

app.listen(PORT, () => {
  console.log(`Application Listening on http://localhost:${PORT}`);
});
