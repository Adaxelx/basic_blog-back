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
    return res.json({
      status: 200,
      message: "Poprawnie zalogowano.",
      token: "abc",
    });
  } else if (login !== dummyData.login || password !== dummyData.password) {
    res.status(403);
    return res.json({ message: "Nieprawidłowe hasło" });
  } else {
    res.status(500);
    return res.json({ message: "Nieznany błąd" });
  }
});

module.exports = router;
