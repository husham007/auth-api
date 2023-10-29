require("dotenv").config();

const PORT = process.env.PORT || 8080;

const MONGODB_URL =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGODB_URL
    : process.env.DB_URL;

module.exports = { MONGODB_URL, PORT };
