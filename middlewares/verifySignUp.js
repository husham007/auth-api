const db = require("../models");
const User = db.user;

checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    const username = await User.findOne({ username: req.body.username });
    if (username) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }
    const email = await User.findOne({
      email: req.body.email,
    });
    if (email) {
      res.status(400).send({ message: "Failed! Email is already in use!" });
      return;
    }
  } catch (e) {
    res.status(500).send({ message: e });
    return;
  }

  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
};

module.exports = verifySignUp;
