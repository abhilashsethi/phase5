import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.get("/health", (req, res) => {
  return res.status(200).json({ status: "ok" });
})

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello from phase5!" });
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

