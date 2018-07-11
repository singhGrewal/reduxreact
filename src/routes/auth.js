const express = require("express");
const app = express();
const auth = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

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
  console.log("IN the api/login");
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    console.log("USer", user, email, password);
    if (!user) {
      console.log("Email not found");
      return res.status(400).json({ email: "User not found" });
    } else {
      // Check Password
      console.log("User found with email : ", email);
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          console.log("Password matched : ");
          // res.json({ msg: "Success : Password matched" });
          const payload = { id: user.id, name: user.name };
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 36000 },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer" + token
              });
            }
          );
        } else {
          console.log("Password DID not matched : ");
          return res.status(400).json({ password: "Incorrect Password" });
        }
      });
    }
  });
});

// @route   GET api/current
// @desc    Return current user
// @access  Private
auth.get(
  "/current",

  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("In the /current route");
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = auth;
