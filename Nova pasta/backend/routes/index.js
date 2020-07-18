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
//});

 // var fs =require('fs');
//	 fs.writefile("../backend/banco.js",JSON.stringify(pessoas),function(err){
	 	//	if(err){
	 	//		console.log(err);
	 	//	}
	 		//console.log("salvo");
	 //});
	
//	response.render('index',{ pessoas: pessoas });
//});

module.exports = router;
