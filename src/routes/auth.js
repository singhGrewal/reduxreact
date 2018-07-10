const express = require("express");
const app = express();
const auth = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// @route   POST api/register
// @desc    Register user
// @access  Public
auth.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      //   errors.email = "Email already exists";
      return res.status(400).json("Email already exists");
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   POST api/login
// @desc    Login user
// @access  Public
auth.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    console.log("USer", user);
    if (!user) {
      return res.status(400).json({ email: "User not found" });
    } else {
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          res.json({ msg: "Success : Password matched" });
        } else {
          return res.status(400).json({ password: "Incorrect Password" });
        }
      });
    }
  });
});

module.exports = auth;
