import type { Socket } from "socket.io";
import { createSignalling, getSocket } from "./createSignaling.js";
export {createSignalling}


export function initializeEvents(){


    const server = getSocket()
    

server.on("connection",(socket:Socket)=>{
    console.log(`User with socket Id ${socket.id} connected`)

    socket.on('disconnect',()=>{
        console.log(`User with socket Id ${socket.id} disconnected`)
    })
})
}