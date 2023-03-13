import { Router } from "express";
import {readdirSync} from 'fs'

const PATH_ROUTER = `${__dirname}`
const router = Router()

const limpiarFilename = (filename:string) => {
    const file = filename.split('.').shift()
    return file
}

readdirSync(PATH_ROUTER).filter((filename)=>{
    const nombreLimpio = limpiarFilename(filename)
    if(nombreLimpio !== 'index'){
        import(`./${nombreLimpio}`).then((moduleRouter)=>{
            router.use(`/${nombreLimpio}`, moduleRouter.router)
        })
        

    }
    
})

export {router}