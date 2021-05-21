const conexion=require('../database/database.js')

exports.miembros=(err,res)=>{
conexion.query('SELECT*FROM miembros',(error,results)=>{
if(error){console.log(error)}
else{
res.send(results)

}
})
}
//mostrar un solo registro por id y nombre

exports.miembrosId=(req,res)=>{
id=req.params.id
conexion.query('SELECT*FROM miembros WHERE id_personajes=?',[id],(error,results)=>{
if(error){console.log(error)}
else{
res.send(results)  

}
})}

exports.miembrosNombre=(req,res)=>{
nombre=req.params.nombre
conexion.query('SELECT*FROM miembros WHERE nombre=?',[nombre],(error,results)=>{
if(error){console.log(error)}
else{
res.send(results)

}
})}

exports.exMiembros=(err,res)=>{
conexion.query('SELECT*FROM ex_miembros',(error,results)=>{
if(error){console.log(error)}
else{res.send(results)

}
})
}


exports.exmimeborsId=(req,res)=>{
    id=req.params.id
    conexion.query('SELECT*FROM ex_miembros WHERE id=?',[id],(error,results)=>{
    if(error){console.log(error)}
    else{
    res.send(results)  
    
    }
    })}
    
    exports.miembrosNombre=(req,res)=>{
    nombre=req.params.nombre
    conexion.query('SELECT*FROM ex_miembros WHERE nombre=?',[nombre],(error,results)=>{
    if(error){console.log(error)}
    else{
    res.send(results)
    
    }
    })}
    
