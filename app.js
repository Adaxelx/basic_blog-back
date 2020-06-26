var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const { index, news, login, quiz, admin } = require("./routes");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);
app.use("/admin", admin);
app.use("/login", login);
app.use("/quiz", quiz);
app.use("/news", news);

module.exports = app;
