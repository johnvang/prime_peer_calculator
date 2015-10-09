var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.post('/calculation', function(request, response, next){
  console.log("hit /calculation route");
  console.log(request.body);
  var values = request.body;
  var num1 = parseFloat(values.number1);
  var num2 = parseFloat(values.number2);
  var operator = values.operator;
  var result = "";
  if(operator === "+"){
    result = num1 + num2;
  } else if (operator === "-"){
    result = num1 - num2;
  } else if (operator === "x"){
    result = num1 * num2;
  } else {
    result = num1 / num2;
  }

  //persist to DB

  console.log(result);
  response.json(result);
});

module.exports = router;
