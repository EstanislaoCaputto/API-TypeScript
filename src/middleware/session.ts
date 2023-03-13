import { NextFunction, Response } from "express";
import { RequestExt } from "../interfaces/req-extinterface";
import { verificarToken } from "../utils/jwt.handle";

const checkSession = (req:RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || ""
        const jwt = jwtByUser?.split(' ').pop()
        const isUser = verificarToken(`${jwt}`) as {id: string}
                
        if(!isUser){
            res.status(401).send("No hay session válida")
        } else {
            req.user = isUser;
            next()
        }
        
    } catch (error) {
        console.log(error);
        
        res.status(400).send('Session_Inválida')
    }
}

export {checkSession}