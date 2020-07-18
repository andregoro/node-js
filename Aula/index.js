console.log("gerenciamento");

var client="Andre";

console.log("Cliente "+client)

var valProduct =100;
var valDiscount=37;

var discoutfun=require("./modules/calDiscount.js");
console.log(discoutfun(valProduct,valDiscount));

var http=require('http');

http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-Type",'text/plain');
    res.end('Hello,World\n');
}).listen(8080);