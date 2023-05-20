const express = require("express");
const path = require("path");
const app = express();
let egyptianIp = false;
let coolDown = 0;
let lastRequest = Date.now();

app.get("/egip", (req, res) => {
  egyptianIp = !egyptianIp;
  res.sendStatus(200);
});

app.get("/cooldown", (req, res) => {
  if (coolDown == 0) {
    coolDown = 5 * 1000;
  } else {
    coolDown = 0;
  }
  res.sendStatus(200);
});

app.use("*", (req, res, next) => {
  console.log(req.ip);
  console.log(egyptianIp);
  console.log(coolDown);
  console.log(lastRequest);
  if (coolDown != 0 && Date.now() - lastRequest < coolDown) {
  } else {
    lastRequest = Date.now();
    if (egyptianIp) {
      if (detector.isEgyptianIp(detector.parseIp(req.ip))) {
        next();
      } else {
        res.send("Not egyptian ip :(");
      }
    } else {
      next();
    }
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.listen(8080, () => {
  console.log("running :)");
});
