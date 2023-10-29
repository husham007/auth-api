const testingRouter = require("express").Router();
const { resetDatabase } = require("../controllers/testing.Controller");

testingRouter.post("/reset", resetDatabase);

module.exports = testingRouter;
