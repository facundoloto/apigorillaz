const conexion=require('../database/database.js')

exports.historia=(err,res)=>{
    try{
        conexion.query('SELECT*FROM historia',(error,results)=>{
            if(error){console.log(error)}
            else{res.send(results)}
        })
    }catch(err){console.log(err)}
    
 
}