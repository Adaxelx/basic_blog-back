const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  votes: { type: Number, required: true },
  questions: { type: Array, required: true },
});

module.exports = mongoose.model("Quiz", QuizSchema);
