let Querys=require("../database/querys.js")
exports.historia=async(err,res)=>{
try{
let sql='select*from historia'
res.send(await Querys.records(sql)) //tambien tenemos que poner await

}catch(err){console.log(err)}


}