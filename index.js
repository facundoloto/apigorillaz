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
const port=8080

app.use(express.json())
app.use(cors())

app.get('/apigorillaz/v1/historia',historia.historia)
app.get('/apigorillaz/v1/miembros',miembros.miembros)
app.get('/apigorillaz/v1/miembros/:id',miembros.miembrosId)
app.get('/apigorillaz/v1/miembros/nombre/:nombre',miembros.miembrosNombre)
app.get('/apigorillaz/v1/exmiembros',miembros.exmiembros)
app.get('/apigorillaz/v1/exmiembros/:id',miembros.exmiembrosId)
app.get('/apigorillaz/v1/exmiembros/nombre/:nombre',miembros.exmiembrosNombre)
app.get('/apigorillaz/v1/villanos',villanos.villanos)
app.get('/apigorillaz/v1/villanos/:id',villanos.villanosId)
app.get('/apigorillaz/v1/villanos/nombre/:nombre',villanos.villanosNombre)
app.get('/apigorillaz/v1/discos/:id',discos.discosId)
app.get('/apigorillaz/v1/discos',discos.discos)
app.get('/apigorillaz/v1/fases',fases.fases)
app.get('/apigorillaz/v1/fases/:id',fases.fasesId)

app.listen(port,()=>{console.log(`server init in port:${port}`)})

