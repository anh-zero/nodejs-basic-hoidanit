import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./router/web";
import initAPIRoute from './router/api';
require("dotenv").config();
var morgan = require('morgan')
const app = express();
const post = process.env.PORT || 3000;

app.use((req, res, next) => {
  //check => return res.send()
  console.log('>>> run into my middleware')
  console.log(req.method)
  next();
})
app.use(morgan('combined'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup view engine
configViewEngine(app);

//init web route
initWebRoute(app);

// init api route
initAPIRoute(app);

//handle 404 not found
app.use((req, res) => {
  return res.render('404.ejs')
})
app.listen(3000, () => {
  console.log(`Example app listen at http://localhost:${post}`);
});
