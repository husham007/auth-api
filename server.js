const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
const { USERNAME, PASSWORD } = require("./config/db.config");

db.mongoose
  .connect(
    `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.nre7ku7.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Auth server application." });
});

// routes
require("./routes/auth.routes")(app);

// set port, listen for requests
const serverPort = process.env.PORT || 8080;
app.listen(serverPort, () => {
  console.log(`Auth server is running on port ${serverPort}.`);
});
