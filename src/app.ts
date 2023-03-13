import "dotenv/config"
import express from 'express'
import cors from 'cors'
import {router} from "./routs"
import db from './config/mongo'

const PORT = process.env.PORT || 8080
const app = express()
app.use(express.json())
app.use(cors())
app.use(router)
db().then(()=>console.log("Conexión establecida")).catch((err)=> console.log(err))
app.listen(PORT, ()=> console.log(`Escuchando en el puerto: ${PORT}`))



