let Querys=require("../database/querys.js")

async function miembros(err,req){
try {
let sql='select*from miembros'
req.send(await Querys.records(sql)) 
} catch (error) {
console.log(error)
}
}


async function miembrosNombre (param,res){
try{
let nombre=param.params.nombre
let sql=`select * from miembros where nombre='${nombre}' `
res.send(await Querys.records(sql)) 
}catch(err){console.log(err)}

}

async function miembrosId(req,res){ 
try {
//arreglar promesa pendiente
let valor=req.params.id
let sql=`select * from miembros where id_personajes= '${valor}'`
res.send(await Querys.records(sql)) 
} catch (error) {
console.log(error)
}
}



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

exports.miembros=miembros
exports.miembrosNombre=miembrosNombre
exports.miembrosId=miembrosId
exports.exmiembros=exmiembros
exports.exmiembrosNombre=exmiembrosNombre
exports.exmiembrosId=exmiembrosId
