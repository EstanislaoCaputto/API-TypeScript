import { Router } from "express";
import { createItem, deleteItem, getItem, getItems, upDateItem } from "../controllers/item";

const router = Router()

router.get('/', getItems)
router.get('/:id', getItem)
router.post('/', createItem)
router.put('/:id', upDateItem)
router.delete('/:id', deleteItem)



export {router}