var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  let dataArray = [
    { name: "mustang", id: "ford" },
    { name: "benz", id: "mercedes" },
  ];

  res.json({
    data: dataArray,
  });
});

module.exports = router;
