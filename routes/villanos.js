let Querys=require("../database/querys.js")
            
exports.villanos=async(err,req)=>{ //para usar la funcions records de la clase querys hay que declaral como async la funcion donde se va invocar ya que retona una promesa y asinc la resuelve
try {
//arreglar promesa pendiente
let sql='select*from villanos'
req.send(await Querys.records(sql)) //tambien tenemos que poner await
} catch (error) {
console.log(error)
}
}

exports.villanosId=async(req,res)=>{ //para usar la funcions records de la clase querys hay que declaral como async la funcion donde se va invocar ya que retona una promesa y asinc la resuelve
    try {
    let valor=req.params.id
    let sql=`select*from villanos where id='${valor}'`
    res.send(await Querys.records(sql)) //tambien tenemos que poner await
    } catch (error) {
    console.log(error)
    }
    }



exports.villanosNombre=async (req,res)=>{
try {
//arreglar promesa pendiente
let valor=req.params.nombre
let sql=`select*from villanos where villano='${valor}'`
res.send(await Querys.records(sql)) //tambien tenemos que poner await
} catch (error) {
console.log(error)
}
}
