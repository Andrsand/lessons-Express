
const express = require("express");  // подключение express

const app = express();               // создаем объект приложения

app.get("/", function (request, response) {  // определяем обработчик для маршрута "/"

    response.send("<h2>Привет Express!</h2>");       // отправляем ответ
});

app.listen(3000); // начинаем прослушивать подключения на 3000 порту

