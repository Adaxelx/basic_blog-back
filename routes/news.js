const express = require("express");
const router = express.Router();
const News = require("../models/news");

router.get("/:id?", (req, res) => {
  const filter = req.params.id;

  // mozna dodać pole .select("_id title") aby zwracać tylko wybrane właściwości( w tym przypadku _id i title)
  const findData = filter
    ? News.find({ title: new RegExp(filter, "i") }).sort({
        date: -1,
      })
    : News.find({}).sort({
        date: -1,
      });
  findData.exec((err, data) => {
    console.log(data);
    if (!err) {
      res.json({ data: data, status: 200 });
    }
  });
});

module.exports = router;
