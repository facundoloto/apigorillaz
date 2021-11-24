let Querys=require("../database/querys.js")
async function exmiembros(err,req){ 
try {
let sql="select*from ex_miembros"
req.send(await Querys.records(sql)) 
} catch (error) {
console.log(error)
}
}

async function exmiembrosId(req,res){
try {
let valor=req.params.id
let sql=`select * from ex_miembros where id= '${valor}'`
res.send(await Querys.records(sql))
} catch (error) {
console.log(error)
}
}

async function exmiembrosNombre (req,res){
try{
let nombre=req.params.nombre
let sql=`select * from ex_miembros where nombre='${nombre}' `
res.send(await Querys.records(sql)) 
}catch(err){console.log(err)}
}

exports.exmiembros=exmiembros
exports.exmiembrosNombre=exmiembrosNombre
exports.exmiembrosId=miembrosId
