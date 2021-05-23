require('dotenv').config()
const mysql=require('mysql')
//instanciamos la conexion a mysql
const conexion=mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME 
    })
    conexion.Promise=global.Promise 
    
conexion.connect(function(err){
if(err){
throw err
}
else{
console.log("connection success")
}
})

module.exports=conexion