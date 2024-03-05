import { Sequelize } from 'sequelize';

const db = new Sequelize("exemplo", "root", "", {
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
}

export default connect;
