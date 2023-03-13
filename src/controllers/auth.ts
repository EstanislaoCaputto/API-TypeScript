import { Request, Response } from "express"
import { registrarNewUser, loginUser } from "../servicio/auth.service"

const registerController = async({body}:Request, res:Response) => {
    const responseUser = await registrarNewUser(body)
    res.send(responseUser)
}
const loginController = async({body}:Request, res:Response) => {
    const responseUser = await loginUser(body)

    if(responseUser === "Contraseña incorrecta"){
        res.status(403).send(responseUser)
    }
    res.send(responseUser)
}

export {registerController, loginController}