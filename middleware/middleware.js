import express  from "express"
import Jwt from "jsonwebtoken";
import { config } from "../config/index.js";

const verification = express.Router();

    verification.use((req,res,next)=>{
        let token = req.headers['x-access-token'] || req.headers['authorization'];
      if(token === undefined){
        return res.status(401).send({message:"se requiere token"});
      }if(token.startsWith('Bearer ')){
        token = token.slice(7,token.length)
        console.log(token)
        Jwt.verify(token,config.secretPass,(error,decode)=>{
            if(error){
                return res.status(401).send({message:"token no valido"})
            }else{
                req.decode = decode
                next();
            }

        })
      }
    })
export default verification