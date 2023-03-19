const express = require("express");

const app = express();

app.set("view engine", "hbs"); //  установка Handlebars в качестве движка представлений в Express

app.use("/contact", function (_, response) {

  response.render("contact.hbs");
});
app.use("/", function (_, response) {

  response.send("Главная страница");
});
app.listen(3000);
