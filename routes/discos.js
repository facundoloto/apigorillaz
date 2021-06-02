const conexion=require('../database/database.js')
const util=require('util')//instalamos con npm util
const query=util.promisify(conexion.query).bind(conexion)//configuramos utiil para usar en las query
const array=[]

async function discos(req,res){




try{
const arr=[]
let sql='select*from discos'
const rows = await query(sql) //la query configurada con util se pueden usar con async/await para cargar muchos datos y hacer soncrionas las consultas en js
for(let i=0;i<rows.length;i++){
let filas=`SELECT songs,url FROM songs where id_disk=${i+1}`
let canciones=await query(filas)
let obj = { "id":`${i+1}`,"disco":`${rows[i].nombre_disco}`,"fecha":`${rows[i].fecha}`, "portada":`${rows[i].url_image}`,canciones}
arr.push(obj)
}
res.send(arr)
}
catch(err){console.log(err)}

}

exports.discos=discos




async function discosId(req,res){
try{ 
let id=req.params.id
let arr=[]
const rows=await query(`SELECT*FROM discos where id_disk=${id}`)

for(let i = 0; i < rows.length; i++) {
const canciones=await query(`SELECT songs,url FROM songs where id_disk=${id}`)
let obj = { "disco":`${rows[i].nombre_disco}`,"fecha":`${rows[i].fecha}`, "portada":`${rows[i].url_image}`,canciones}
arr.push(obj)
res.send(arr)
}
}
catch(err){
console.log(err)
}
}
exports.discosId=discosId