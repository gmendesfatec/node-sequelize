import { Sequelize } from 'sequelize';

// Criação de uma instância do Sequelize
// A instância já recebe as informações de login e o banco que será usado
const db = new Sequelize("exemplo", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

// Conectando no banco com as informações passadas na instância do Sequelize
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
