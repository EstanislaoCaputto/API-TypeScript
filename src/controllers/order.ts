import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getOrders = (req:Request, res: Response) => {
    try {
        res.send({data:'Solo será leido por los usuarios con session activa | JWT'})
    } catch (error) {
        handleHttp(res, 'ERROR_DE_ORDER', error)
    }

}

export {getOrders}