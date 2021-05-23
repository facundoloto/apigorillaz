//instanciamos los objetos con require
require('dotenv').config()
const express=require('express')
const app=express()
const villanos=require('./routes/villanos');
const miembros=require('./routes/miembros');
const discos=require('./routes/discos');
const historia=require('./routes/historia');
const fases=require('./routes/fases');
const cors=require('cors')
const port=5000

app.use(express.json())
app.use(cors())

app.get('/apigorillaz/historia',historia.historia)
app.get('/apigorillaz/miembros',miembros.miembros)
app.get('/apigorillaz/miembros/:id',miembros.miembrosId)
app.get('/apigorillaz/miembros/:nombre',miembros.miembrosNombre)
app.get('/apigorillaz/exmiembros',miembros.exMiembros)
app.get('/apigorillaz/villanos',villanos.villanos)
app.get('/apigorillaz/villanos/:id',villanos.villanosId)
app.get('/apigorillaz/discos/:id',discos.discosId)
app.get('/apigorillaz/discos',discos.discos)
app.get('/apigorillaz/fases',fases.fases)

app.listen(port,()=>{console.log(`server init in port:${port}`)})

