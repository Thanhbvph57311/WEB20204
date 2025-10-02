import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import router from "./routers/index";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).json(req.body);
});
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
