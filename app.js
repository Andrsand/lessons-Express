const express = require("express");

const app = express();

app.set("view engine", "hbs");

app.use("/contact", function (_, response) {

  response.render("contact.hbs", {
    title: "Мои контакты",
    email: "gavgav@mycorp.com",
    phone: "+1234567890"
  });
});
app.use("/", function (_, response) {

  response.send("Главная страница");
});
app.listen(3000);