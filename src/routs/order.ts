import { Router, Request, Response } from "express";
import { checkSession } from "../middleware/session";
import { getOrders } from "../controllers/order";


const router = Router()

router.get('/',checkSession, getOrders)

export {router}