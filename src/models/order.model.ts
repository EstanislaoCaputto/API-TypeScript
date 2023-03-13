import {Schema, Types, model, Model} from 'mongoose'
import { Order } from '../interfaces/order.interface';

const OrderSchema = new Schema<Order>(
    {
        nombre:{
            type:String,
            required:true
        },
        descripcion:{
            type:String,
            default:'Descripción de orden por defecto'
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const OrderModel = model('order', OrderSchema)
export default OrderModel