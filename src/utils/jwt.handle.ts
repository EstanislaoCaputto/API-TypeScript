import {verify, sign} from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || "mitonkenEsbulnerable"

const generarToken = (id:string) => {
    const jwt = sign({id}, JWT_SECRET, {expiresIn:"2h"})
    return jwt
};
const verificarToken = (jwt:string) =>{
    const isOK = verify(jwt, JWT_SECRET)
    return isOK
};

export {generarToken, verificarToken}