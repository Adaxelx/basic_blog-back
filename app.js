var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const cors = require("cors"); // przydatne do walki z corsem https://dev.to/p0oker/why-is-my-browser-sending-an-options-http-request-instead-of-post-5621

const config = require("./config");
const mongoose = require("mongoose");
mongoose.connect(config.db, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
const { index, news, login, quiz, admin } = require("./routes");
var app = express();

app.use(cors());
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
