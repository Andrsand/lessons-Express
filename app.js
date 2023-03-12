const express = require("express");
const app = express();

app.use("/home", function (request, response) {
    response.redirect("/index")
});
app.use("/index", function (request, response) {
    response.send("<h1>About</h1>");
});

app.listen(3000);

