var port = process.env.PORT || 5000;
var express = require("express");
var app = express();

app.use(express.static(__dirname + "/"));
app.set("views", __dirname + "/");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(port, function() {
  console.log("Listening on " + port);
});
