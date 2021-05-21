const conexion=require('../database/database.js')
const array=[]
const util=require('util')//instalamos con npm util
const query=util.promisify(conexion.query).bind(conexion)//configuramos utiil para usar en las query


async function fases(req,res){
try{
let sql='SELECT fases.fase,fases.historia,discos.nombre_disco,villanos.villano FROM fases JOIN discos ON fases.id_disk = discos.id_disk JOIN villanos ON fases.villano=villanos.id ORDER BY fase'
const rows = await query(sql) //la query configurada con util se pueden usar con async/await para cargar muchos datos y hacer soncrionas las consultas en js
let sqlNew=`select fase,historia,discos.nombre_disco from fases JOIN discos ON fases.id_disk=discos.id_disk where fase='fase 4' `
const rowsNew = await query(sqlNew)
rows.push(rowsNew)
res.send(rows)


}
catch(err){console.log(err)}
}
exports.fases=fases