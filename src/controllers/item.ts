import { Response, Request } from "express"
import { insertItem, verItems, buscarId, updateItem, eliminarItem } from "../servicio/item.service"
import { handleHttp } from "../utils/error.handle"

const getItem = async(req:Request, res: Response) =>{
    try {
        const itemId = await buscarId(req.params.id)
        const data = itemId ? itemId : "NOT_FOUND"   
        res.send(data) 
        
    } catch (error) {
        handleHttp(res, 'Error_Get_Item', error)
    }
}
const getItems = async(req:Request, res: Response) =>{
    try {
        const responseItem = await verItems()
        res.send(responseItem)
        
    } catch (error) {
        handleHttp(res, 'Error_Gets_Item', error)
    }
}
const upDateItem = async({params,body}:Request, res: Response) => {
    try {
        const {id} = params
        const itemUpdate = await updateItem(id, body)
        res.send(itemUpdate)
    } catch (error) {
        handleHttp(res, 'Error_UpDate_Item', error)
    }
}
const deleteItem = async(req:Request, res: Response) => {
    try {
        const itemRemove = await eliminarItem(req.params.id)
        res.send(itemRemove)
    } catch (error) {
        handleHttp(res, 'Error_Delete_Item', error)
    }
}
const createItem = async({body}:Request, res: Response) => {
    try {       
        const responseItem = await insertItem(body)
        
        res.send(responseItem)
        
    } catch (error) {
        handleHttp(res, 'Error_Create_Item', error)
    }
}

export {getItem, getItems, upDateItem, deleteItem, createItem}