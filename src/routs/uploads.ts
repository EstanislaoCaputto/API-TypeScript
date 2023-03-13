import { Router, Request, Response } from "express";
import { checkSession } from "../middleware/session";
import { getFile } from "../controllers/storage";
import multerMiddleware from "../middleware/file";


const router = Router()

router.post('/',checkSession, multerMiddleware.single('myFile'), getFile)

export {router}