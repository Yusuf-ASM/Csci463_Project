const express = require("express");
const path = require("path");
const app = express();

app.use('*',(req,res,next)=>{
    console.log(req.ip);
    next();
});
app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.listen(8080,()=>{
    console.log("running :)");
});
