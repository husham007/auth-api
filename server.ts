import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import config from "./utils/config";
import("./mongoDB");
import userRouter from "./routes/userRoute";

const app = express();

app.use(express.static("build"));
const corsOptions = {
  origin:"http://localhost:8081",
  // origin: "https://personal-weather-station.netlify.app",
  
  credentials: true,
  
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.get("/", (_req, res) => {
  res.send("NodeJS + Express + Typescript App Up Weather app! 👍");
});

app.use("/api/auth", userRouter);

app.listen(config.PORT, () => {
  console.log(`Server is running on http://localhost:${config.PORT}`);
});
