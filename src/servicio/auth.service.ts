import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model"
import { generarToken } from "../utils/jwt.handle";
import { decrypt, encrypt } from "../utils/password.handle";

const registrarNewUser = async({email, password, name}:User) => {
    const checkIs = await UserModel.findOne({email:email})
    if(checkIs) return "YA EXISTE EL USUARIO";
    const passHash = await encrypt(password)
    const registrarNuevoUsuario = await UserModel.create({email, password: passHash, name})
    return registrarNuevoUsuario
}
const loginUser = async({email, password}:Auth) => {
    const checkIs = await UserModel.findOne({email:email})
    if(!checkIs) return "Error en los datos, no existe";
    const passwordHash = checkIs.password
    const esCorrecto = await decrypt(password, passwordHash)
    if(!esCorrecto) return "Contraseña incorrecta"
    const token = generarToken(checkIs.email)
    const data = {
        token,
        user: checkIs
    }
    return data
}

export {registrarNewUser, loginUser}