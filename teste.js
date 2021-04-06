const Sequelize = require('sequelize')
const sequelize = new Sequelize('modelo','samuel','zyk270',{
    host: "localhost",
    dialect:'mysql'

})

sequelize.authenticate().then(function(){
    console.log("funcionou")
}).catch(function(erro){
    console.log(erro)
})