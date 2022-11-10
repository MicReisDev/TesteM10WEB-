const { sequelize, Sequelize } = require('./db');

const Usuarios = sequelize.define('usuarios', {
  id_usuario:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sobrenome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  telefone: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  cpf: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
});



module.exports = Usuarios;
