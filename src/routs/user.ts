import { Router, Request, Response } from "express";
import { logMiddleware } from "../middleware/log";

const router = Router()

router.get('/', logMiddleware, (req:Request, res:Response)=>{
    res.send({data: "AQUI DEBERÍAN IR LOS users"})
})

export {router}