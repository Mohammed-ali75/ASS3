const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const path = require("path");


var hbs = require("hbs");
const partialsPath = path.join(__dirname, "/fixed");
hbs.registerPartials(partialsPath);

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", {
    title: "HOME",
    desc: "This is home page",
  });
});

app.get("/name", (req, res) => {
  res.render("name", {
    title: "NAME",
    name: "Mohamed Ali",
    city: "Cairo",
    age: 23,
  });
});

app.get("/work", (req, res) => {
  res.render("work", {
    title: "WORK",
    name: "BackEnd Developer",
    city: "Cairo",
  });
});

app.get("/me", (req, res) => {
  res.render("me", {
    title: "ME",
    img: "../img/imgME.jpg"
  });
});

app.get("/nothing", (req, res) => {
  res.render("nothing", {
    title: "NOTHING",
    title2: "There is nothing on this page or any other information to add. Thank you"
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
