import {Schema, Types, model, Model} from 'mongoose'
import { Item } from '../interfaces/item.interface'

const ItemSchema = new Schema<Item>(
    {
        nombre:{
            type:String,
            required:true
        },
        descripcion:{
            type:String
        },
        precio:{
            type:Number,
            required:true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const ItemModel = model('items', ItemSchema)
export default ItemModel