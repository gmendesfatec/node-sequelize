import connect from "./db_connection";
import { DataTypes } from "sequelize";
import express from 'express';

// Create application with express
const app = express();

// Connect com o database
const db = connect();

const agendamentos = db.define("agendamentos", {
    nome: {
        type: DataTypes.STRING
    },
    endereco: {
        type: DataTypes.STRING,
    },
    bairro: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.STRING
    },
    cep: {
        type: DataTypes.STRING
    },
    observacao: {
        type: DataTypes.STRING
    }
})

// agendamentos.sync({ force: true });

// interface DBData {
//     nome: string,
//     endereco: string,
//     bairro: string,
//     cep: number,
//     cidade: string,
//     estado: string,
//     observacao: string
// };

app.get('/cadastrar/', (req, res) => {
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
    } catch(err) {
        res.status(500).json({
            msg: "Erro ao cadastrar os dados",
            err
        })
    }
})


app.listen(3000);