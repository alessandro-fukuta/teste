const Express = require('express');
const app = Express();
const connection = require("./database/connection");
const bodyParser = require('body-parser');
const porta = 4000;

// engine vai ser ejs
app.set("view engine", "ejs");

// pasta estatica de arquivos
app.use(Express.static("public")); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(porta, () => {

    console.log("Servidor rodando na porta: " + porta);

});