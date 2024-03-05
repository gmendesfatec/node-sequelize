"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var db = new sequelize_1.Sequelize("exemplo", "root", "", {
    host: "localhost",
    dialect: "mysql"
});
var connect = function () {
    db.authenticate()
        .then(function () {
        console.log("Banco autenticado");
    })
        .catch(function (err) {
        console.error({
            msg: "Falha na conexão com banco",
            err: err
        });
    });
    return db;
};
exports.default = connect;
