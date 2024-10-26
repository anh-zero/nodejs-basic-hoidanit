// const express = require("express");
import express from "express";
// const path = require("path");
import configViewEngine from "./configs/viewEngine";
require("dotenv").config();

const app = express();
const post = process.env.PORT || 3000;

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
configViewEngine(app);

app.get("/", (req, res) => {
  res.render("test/index.ejs");
});

app.get("/about", (reg, res) => {
  res.send("My name is Zero");
});

app.listen(3000, () => {
  console.log(`Example app listen at http://localhost:${post}`);
});
