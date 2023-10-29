const db = require("../models");
const User = db.user;

const resetDatabase = async (req, res) => {
  try {
    await User.deleteMany({});
    res.status(204).end();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = resetDatabase;
