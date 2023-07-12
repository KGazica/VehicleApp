var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  let dataArray = [
    {
      id: "Ford",
      name: "Mustang",
      Abrv: "FM",
    },
    {
      id: "Mercedes",
      name: "Benz",
      Abrv: "MB",
    },
  ];

  res.json({
    data: dataArray,
  });
});

module.exports = router;
