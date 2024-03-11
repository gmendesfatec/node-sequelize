"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_connection_1 = __importDefault(require("./db_connection"));
const sequelize_1 = require("sequelize");
const express_1 = __importDefault(require("express"));
// Create application with express
const app = (0, express_1.default)();
// Connect to databse
const db = (0, db_connection_1.default)();
// Create agendamentos table
const agendamentos = db.define("agendamentos", {
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
agendamentos.sync();
// Middleware for insert data into database
function inserirDados(req, res, next) {
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
            err
        });
    }
    next();
}
/*  Query for test
    ?nome=gabriel&endereco=rua&bairro=sp&estado=spdnv&cep=111&observacao=teste
*/
app.get('/cadastrar', inserirDados);
app.listen(3000);
