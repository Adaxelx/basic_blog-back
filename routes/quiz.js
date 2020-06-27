const express = require("express");
const router = express.Router();
const Quiz = require("../models/quiz");

router.get("/", (req, res) => {
  Quiz.find({}, (err, data) => {
    res.json(data);
  });
});

router.post("/:answer/:id", (req, res) => {
  const answer = req.params.answer;
  const id = req.params.id;
  Quiz.findOne({ _id: id }, (err, data) => {
    let newArr = [];
    data.questions.forEach((question, i) => {
      if (question.answer === answer)
        newArr[i] = { answer: question.answer, votes: question.votes + 1 };
      else newArr[i] = question;
    });
    data.questions = newArr;
    data.votes++;
    console.log(data);
    data.save();
    res.json({ data, message: "Ok" });
  });
});

module.exports = router;
