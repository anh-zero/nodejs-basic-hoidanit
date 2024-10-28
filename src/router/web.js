import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();

const initWebRoute = (app) => {
  /*   router.get("/", (req, res) => {
    res.render("test/index.ejs");
  }); */
  router.get("/", homeController.getHomepage);

  router.get("/about", (reg, res) => {
    router.send(`My name is Zero`);
  });

  return app.use("/", router);
};

export default initWebRoute;