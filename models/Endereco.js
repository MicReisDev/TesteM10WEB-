const { sequelize, Sequelize } = require('./db');

const Endereco = sequelize.define('endereco', {
  id_endereco_usuario:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  id_usuario:{
    type: Sequelize.INTEGER,
    foreignKey: true
  },
  logradouro: {
    type: Sequelize.STRING,
    allowNull: false
  },
  numero: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  cidade: {
    type: Sequelize.STRING,
    allowNull: false
  },
  uf: {
    type: Sequelize.STRING(2),
    allowNull: false
  },
  cep: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  bairro: {
    type: Sequelize.STRING,
    allowNull: false
  },
  complemento: {
    type: Sequelize.STRING,
  },
});



module.exports = Endereco;