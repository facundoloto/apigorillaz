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

async function fasesId(req,res){
try{
let rowsNew=[]
let id=req.params.id
let sql=''
switch(id){
case '1':
sql='SELECT fases.fase,fases.historia,fases.url_imagen,discos.nombre_disco,villanos.villanoFROM fases JOIN discos ON fases.id_disk = discos.id_disk JOIN villanos ON fases.villano=villanos.id  where fases.fase="fase 1"'
rowsNew= await query(sql)
res.send(rowsNew)
break
case '2':
sql='SELECT fases.fase,fases.historia,fases.url_imagen,discos.nombre_disco,villanos.villano FROM fases JOIN discos ON fases.id_disk = discos.id_disk JOIN villanos ON fases.villano=villanos.id  where fases.fase="fase 2"'
rowsNew= await query(sql)
res.send(rowsNew)
break
case '3':
sql='SELECT fases.fase,fases.historia,fases.url_imagen,discos.nombre_disco,villanos.villano FROM fases JOIN discos ON fases.id_disk = discos.id_disk JOIN villanos ON fases.villano=villanos.id  where fases.fase="fase 3"'
rowsNew= await query(sql)
res.send(rowsNew)
break
case '4':
sql=`select fase,historia,discos.nombre_disco from fases JOIN discos ON fases.id_disk=discos.id_disk where fase='fase 4' `
rowsNew= await query(sql)
res.send(rowsNew)
break
}
 
}
catch(err){
console.log(err)
}
}
exports.fasesId=fasesId