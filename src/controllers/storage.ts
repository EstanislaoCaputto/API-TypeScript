import { NextFunction, Response } from "express";
import { RequestExt } from "../interfaces/req-extinterface";
import { registrarUpload } from "../servicio/storage.service";
import { handleHttp } from "../utils/error.handle";
import { Storage } from "../interfaces/storage.interface";

const getFile = async(req:RequestExt, res: Response) => {
    try {
        const {user, file} = req
        const dataToRegister:Storage = {
            fileName:`${file?.filename}`,
            idUser: user?.id,
            path:`${file?.path}`
        }
        const response = await registrarUpload(dataToRegister)
        
        res.send(response)
    } catch (error) {
        handleHttp(res, 'Algo_Malio_Sal', error)
    }
}

export {getFile}