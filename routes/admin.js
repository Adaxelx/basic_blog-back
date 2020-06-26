const express = require("express");
const router = express.Router();
const News = require("../models/news");

router.get("/", (req, res) => {
  res.end();
});

router.post("/news/add/", (req, res) => {
  if (req.authentication !== "abc") {
    res.json({
      status: 403,
      message: "Nie masz uprawnień do dodawania postów",
    });
    return;
  }
  const { title, content } = req.body;
  const newsData = new News({
    title,
    content,
  });

  newsData.save((err) => {
    if (err) {
      res.json({ status: 403, message: "Nie udało się dodać posta." });
    } else {
      res.json({ status: 200, message: "Pomyślnie przesłano post" });
    }
  });
});

module.exports = router;
