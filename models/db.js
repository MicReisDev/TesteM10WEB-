const Sequelize = require("sequelize");


const sequelize = new Sequelize(process.env.DB,"root",process.env.PASSWORD,{
  
  host:"localhost",
  dialect:"mysql"

})



module.exports = { 
  Sequelize,
  sequelize
}