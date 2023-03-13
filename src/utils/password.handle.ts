import {hash, compare} from 'bcryptjs'

const encrypt = async(passPlane: string) =>{
    const passwordHash = await hash(passPlane, 8)
    return passwordHash
}
const decrypt = async(passPlane:string, passHash:string) =>{
    const esCorrecto = await compare(passPlane, passHash)
    return esCorrecto
}

export {encrypt, decrypt}