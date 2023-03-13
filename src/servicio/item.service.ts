import { Item } from "../interfaces/item.interface"
import ItemModel from "../models/item.model"


const insertItem = async(item:Item) =>{
    const responseInsert = await ItemModel.create(item)
    return responseInsert
}

const verItems = async() => {
    const responseItem = await ItemModel.find({})
    return responseItem
}

const buscarId = async(id:string) =>{
    const responseItem = await ItemModel.findOne({_id:id})
    return responseItem
}

const updateItem = async(id:string, data:Item) =>{
    const responseItem = await ItemModel.findOneAndUpdate(
        {_id:id},
        data,
        {new:true}
    )
    return responseItem
}
const eliminarItem = async(id:string) =>{
    const responseItem = await ItemModel.findByIdAndRemove({_id:id})
    return responseItem
}
export {insertItem, verItems, buscarId, updateItem, eliminarItem}