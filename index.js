const express = require('express');
const app = express();
require('dotenv').config();
const bodyParse = require('body-parser');
const { sequelize, Sequelize } = require('./models/db');




//IMPORT MODELS
const Endereco = require('./models/Endereco');
const Usuarios = require('./models/Usuarios');


//IMPORT ROTA
const usuarioRota = require('./routes/usuario')
const enderecoRota = require('./routes/endereco')


//------------CÓDIGO----------
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());


//CONECT DATABASE
sequelize.authenticate()
  .then(() => console.log('conectado com sucesso'))
  .catch((error) => console.log('erro ao conectar ' + error));



//rotas
app.use("/usuarios", usuarioRota);
app.use("/endereco-usuario", enderecoRota);




app.listen(process.env.PORT, () => {
  console.log('servidor rodando');
});
