const express = require("express");
const app = express();
const post = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (reg, res) => {
  res.send("My name is Zero");
});
/*
const server = http.createServer((req, res) => {
  console.log("run request ...");
  res.setHeader("Content-Type", "text/html");
  res.write("<h3>Hello World</h3>");
  res.write("<h2>From anh-zero</h2>");
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("Node.JS server is running on port: 3000");
});
*/

app.listen(3000, () => {
  console.log(`Example app listen at http://localhost:${post}`);
});
