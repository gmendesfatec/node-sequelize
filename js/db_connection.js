"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize("exemplo", "root", "", {
    host: "localhost",
    dialect: "mysql"
});
const connect = () => {
    db.authenticate()
        .then(() => {
        console.log("Banco autenticado");
    })
        .catch(err => {
        console.error({
            msg: "Falha na conexão com banco",
            err
        });
    });
    return db;
};
exports.default = connect;
