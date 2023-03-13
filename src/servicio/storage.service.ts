import { Storage } from "../interfaces/storage.interface";
import StorageModel from "../models/storage.model";

const registrarUpload = async({fileName, idUser, path}:Storage) =>{
    const responseRegistro = await StorageModel.create({fileName, idUser, path})
    return responseRegistro
}

export {registrarUpload}