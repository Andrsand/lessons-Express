
const express = require("express");  // подключение express

const app = express();               // создаем объект приложения

app.get("/", function (request, response) {  // определяем обработчик для маршрута "/"

    response.send("<h1>Главная страница</h1>");       // отправляем ответ
});

app.get("/about", function (request, response) {

    response.send("<h1>О сайте</h1>");
});
app.get("/contact", function (request, response) {

    response.send("<h1>Контакты</h1>");
});

app.listen(3000); // начинаем прослушивать подключения на 3000 порту

