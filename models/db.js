const Sequelize = require("sequelize");


const sequelize = new Sequelize("mdezweb","root",process.env.PASSWORD,{
  
  host:"localhost",
  dialect:"mysql"

})



module.exports = { 
  Sequelize,
  sequelize
}