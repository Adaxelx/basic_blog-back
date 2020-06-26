const express = require("express");
const router = express.Router();
const News = require("../models/news");

router.get("/", (req, res) => {
  res.end();
});

router.delete("/news/delete/:id", (req, res) => {
  if (req.headers.authorization !== "Token abc") {
    res.json({
      status: 403,
      message: "Nie masz uprawnień do dodawania postów",
    });
    return;
  }
  News.findByIdAndDelete(req.params.id, (err) => {
    res.json({ message: "Usunięto", status: 200 });
  });
});

router.get("/news", (req, res) => {
  console.log(req.headers.authorization);
  if (req.headers.authorization !== "Token abc") {
    res.json({
      status: 403,
      message: "Nie masz uprawnień do dodawania postów",
    });
    return;
  }

  News.find({}, (err, data) => {
    if (!err) {
      res.json({
        data,
        status: 200,
        message: "Pomyślnie pobrano dane",
      });
    }
  });
});

router.post("/news/add/", (req, res) => {
  if (req.headers.authorization !== "Token abc") {
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
