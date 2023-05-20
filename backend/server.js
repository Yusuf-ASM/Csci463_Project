const express = require("express");
const path = require("path");
const app = express();
let egyptianIp = false;
let reqestCount = 0;
let reqestLimit = 1000;
let reqestTimeLimit = 5 * 1000;
let lastRequest = Date.now();

app.get("/egip", (req, res) => {
  egyptianIp = !egyptianIp;
  res.sendStatus(200);
});

app.use("*", (req, res, next) => {
  console.log(reqestCount);
    if (limit()) {
    lastRequest = Date.now();
    if (egyptianIp) {
      if (detector.isEgyptianIp(detector.parseIp(req.ip))) {
        reqestCount++;
        next();
      } else {
        res.send("Not egyptian ip :(");
      }
    } else {
      reqestCount++;
      next();
    }
  } else {
    res.sendStatus(500);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.listen(8080, () => {
  console.log("running :)");
});

function limit() {
  if (Date.now() - lastRequest > reqestTimeLimit) {
    lastRequest = Date.now();
    reqestCount = 0;
    return true;
  }
  if (reqestCount >= reqestLimit) {
    return false;
  }
  return true;
}
