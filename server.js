//importaciones
import express from "express";

import { config } from './config/index.js';

import routes from "./network/index.js"

import helmet from "helmet";

import cors from "cors"
const app = express()
const PORT = process.PORT||3000
///midel en en json 
app.use(express.json())

// envios en formato formularios 
app.use(express.urlencoded({extended:true}))
//cascos -- helmet para la seguridad  del backe
app.use(helmet());
//seguriada x-xss
app.use(helmet.xssFilter());

//cors 
app.use(cors())

//routes
app.use('/api',routes)
//listen

// salida de puerto port :
app.listen(config.port,()=>{
    console.log(`Server up on port ${config.port}`);
})

export default app


