const db = require("../models");
const User = db.user;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  try {
    const savedUser = await user.save();
    if (savedUser)
      res.send({
        message: "User was registered successfully!",
        user: user.username,
      });
    else res.send({ message: "User not registered!" });
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e.message });
  }
};

exports.signin = async (req, res) => {
  // console.log(req.body);
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, email: user.email },
      process.env.SECRET,
      {
        algorithm: "HS256",
        allowInsecureKeySizes: true,
        expiresIn: 86400, // 24 hours
      }
    );

    res.status(200).send({
      id: user._id,
      username: user.username,
      email: user.email,
      token: token,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e.message });
  }
};
