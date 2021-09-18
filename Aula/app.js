// console.log("gerenciamento");

// var client="Andre";

// console.log("Cliente "+client)

// var valProduct =100;
// var valDiscount=37;

// var discoutfun=require("./modules/calDiscount.js");
// console.log(discoutfun(valProduct,valDiscount));

// var http=require('http');

// http.createServer((req,res)=>{
//     res.statusCode=200;
//     res.setHeader("Content-Type",'text/plain');
//     res.end('Hello,World\n');
// }).listen(8080);
const mysql=request('mysql');
const express=require("express");

const app=express();
const conection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'Car'
});
conection.connect(function (err) {
    if (err) {
        console.error('erro '+err.stack);
        return;
    }
    console.log('connected as id'+conection.threadId)
});

conection.query('select * from veiculo',function (err,row,fields) {
    if(!err){
        console.log("resultado",row);
    }
});

app.get("/",function(req,res) {
    res.sendfile("./src/index.html");
});

app.get("/contato",function(req,res) {
    res.send("Pagina do contato");
});

app.get("/sobre-empresa",function(req,res) {
    res.send("Pagina sobre empresa");
});

app.get("/blog",function(req,res) {
    res.send("Pagina do blog");
});

app.listen(8080);