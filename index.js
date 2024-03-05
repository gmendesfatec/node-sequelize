"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_connection_1 = require("./db_connection");
var sequelize_1 = require("sequelize");
var Express = require("express");
// Create application with express
var app = Express();
// Connect com o database
var db = (0, db_connection_1.default)();
var agendamentos = db.define("agendamentos", {
    nome: {
        type: sequelize_1.DataTypes.STRING
    },
    endereco: {
        type: sequelize_1.DataTypes.STRING,
    },
    bairro: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.STRING
    },
    cep: {
        type: sequelize_1.DataTypes.STRING
    },
    observacao: {
        type: sequelize_1.DataTypes.STRING
    }
});
agendamentos.sync({ force: true });
// interface DBData {
//     nome: string,
//     endereco: string,
//     bairro: string,
//     cep: number,
//     cidade: string,
//     estado: string,
//     observacao: string
// };
app.get('/cadastrar/', function (req, res) {
    try {
        agendamentos.create({
            nome: req.query.nome,
            endereco: req.query.endereco,
            bairro: req.query.bairro,
            cep: req.query.cep,
            cidade: req.query.cidade,
            estado: req.query.estado,
            observacao: req.query.observacao
        });
        res.json("Dados cadastrados");
    }
    catch (err) {
        res.status(500).json({
            msg: "Erro ao cadastrar os dados",
            err: err
        });
    }
});
app.listen(3000);
