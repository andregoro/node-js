// const http = require("http");

// //const hostname = "127.0.0.1";
// const hostname = "locb.ddns.net"; //"192.168.2.155";
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("<a>Ola falai</a>");
// });

// server.listen(port, hostname, () => {
//   console.log("servidor rodano");
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const express = require("express");
// const app = express();
// const path = require("path");
// const router = express.Router();

// router.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname + "/index.html"));
// });

// app.use("/", router);
// app.listen(process.env.port || 3000);
// console.log("rodando");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const express = require("express");
const route = require("./routes");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("ola mundo pelo express"));

app.listen(port,()=>console.log('Api rodando na porta 3000'));