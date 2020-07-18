var express = require('express');
var router = express.Router();

var pessoas;
/* GET home page. */

router.get('/', function(request, response, next) {
  	response.render('index',{ title:"oi"});
});
router.post('/cadastrar-pessoa', function(request, response, next) {
 

  pessoa=request.body.cpf;
   
   response.render('index',{ pessoas: pessoa });
  });
module.exports = router;