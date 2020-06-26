const express = require("express");
const admin = require("./admin");
const news = require("./news");
const quiz = require("./quiz");
const login = require("./login");

const router = express.Router();

router.get("/", (req, res) => {
  res.end();
});

module.exports = { index: router, admin, news, quiz, login };
