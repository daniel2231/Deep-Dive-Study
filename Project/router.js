let express = require("express");
let router = express.Router();
const viewPath = "./views/";

router.get("/", (req, res) => {
  res.sendFile(viewPath + "index.html", { root: __dirname });
});

let restaurants = [""];
restaurants.forEach(function (name) {
  app.get(name, function (req, res) {
    res.sendFile(viewPath + `/restaurants/${name}.html`), { root: __dirname };
  });
});

module.exports = router;
