require("./mongoDB");
const routes = require("./routes/auth.routes");
const express = require("express");
const cors = require("cors");
const app = express();

// const corsOptions = {
//   origin: "http://localhost:8081",
// };

const corsOptions = {
  // origin: [
  //   "http://localhost:8081",
  //   "https://personal-weather-station.netlify.app/",
  // ],

  origin: "*",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Auth server application." });
});

// if (process.env.NODE_ENV === "test") {
//   const testingRouter = require("./routes/testingRoutes");
//   app.use("/api/auth/testing", testingRouter);
// }

routes(app);

module.exports = app;
