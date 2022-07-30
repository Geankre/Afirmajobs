const express = require("express");
const routes = express.Router();

routes.get("/",  (req, res) => {
    res.status(200).send({
        title: "{Reprograma} - Afirmajobs - Projeto Final",
        version: "1.0.0",
        mensagem: "Aqui você encontra a primeira versão da plataforma Afirmajobs, uma aplicação para divulgação de vagas voltadas para a diversidade e inclusão."
    })
})

module.exports = routes