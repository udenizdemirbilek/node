const express = require("express");

const app = express();
const bodyParser = require("body-parser");

const users = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.render("index", { pageTitle: "Add User" });
});

app.get("/users", (req, res, next) => {
  res.render("users", { pageTitle: "Users", users: users });
});

app.post("/add-user", (req, res, next) => {
  users.push({ name: req.body.username });
  res.redirect("/users");
});

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page not found" });
});

app.listen(3000);
