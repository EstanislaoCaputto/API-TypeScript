import OrderModel from "../models/order.model";

const getOreders =async () => {
    const responseOrder = await OrderModel.find({})
    return responseOrder
}

export {getOreders}