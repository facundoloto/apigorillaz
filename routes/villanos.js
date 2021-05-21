const conexion=require('../database/database.js')
exports.villanos=(err,res)=>{
    try{
        conexion.query('SELECT*FROM villanos',(error,results)=>{
            if(error){console.log(error)}
            else{
            res.send(results)
            
            }
           })
    }catch(err){console.log(err)}
 }

 exports.villanosId=(req,res)=>{
    id=req.params.id
    conexion.query('SELECT*FROM villanos WHERE id=?',[id],(error,results)=>{
    if(error){console.log(error)}
    else{
    res.send(results)  
    
    }
    })}

        
        exports.villanosNombre=(req,res)=>{
        nombre=req.params.nombre
        conexion.query('SELECT*FROM villanos WHERE villano=?',[nombre],(error,results)=>{
        if(error){console.log(error)}
        else{
        res.send(results)
        
        }
        })}