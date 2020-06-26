const express = require("express");
const admin = require("./admin");
const news = require("./admin");
const quiz = require("./admin");
const login = require("./admin");

const router = express.Router();

router.get("/", (req, res) => {
  res.end();
});

module.exports = { index: router, admin, news, quiz, login };
