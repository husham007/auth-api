import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import config from "./utils/config";
import("./mongoDB");

const app = express();

const corsOptions = {
  origin: "http://localhost:8080",
  credential: true,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.get("/", (_req, res) => {
  res.send("NodeJS + Express + Typescript App Up Weather app! 👍");
});

app.listen(config.PORT, () => {
  console.log(`Server is running on http://localhost:${config.PORT}`);
});
