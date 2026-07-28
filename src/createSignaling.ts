import type { Server } from "socket.io";
 
let socketServer:Server|null

export function createSignaling(server:Server){
      socketServer=server
}


export function getServer(){
    if(!socketServer){
        throw new Error('Socket has not been initialized. Call createSignalling first')
    }

    return socketServer
}
