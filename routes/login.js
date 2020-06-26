const express = require("express");
const router = express.Router();

const dummyData = {
  login: "admin",
  password: "admin",
};

router.get("/", (req, res) => {
  res.end();
});

router.post("/", (req, res) => {
  const { login, password } = req.body;
  if (login === dummyData.login && password === dummyData.password) {
    res.json({ status: 200, message: "Poprawnie zalogowano.", token: "abc" });
  } else {
    res.json({ status: 403, message: "Nieprawidłowe hasło" });
  }
});

module.exports = router;
