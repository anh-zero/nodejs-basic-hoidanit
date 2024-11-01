import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./router/web";
import initAPIRoute from './router/api';
require("dotenv").config();

const app = express();
const post = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup view engine
configViewEngine(app);

//init web route
initWebRoute(app);

// init api route
initAPIRoute(app);

app.listen(3000, () => {
  console.log(`Example app listen at http://localhost:${post}`);
});
