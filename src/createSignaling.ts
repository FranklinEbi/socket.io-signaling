import type { Server } from "socket.io";
 
let socketServer:Server|null = null

export function createSignalling(server:Server){
    if(socketServer){
        throw new Error('Server has already been initialized.')
    }
      socketServer=server
}


export function getServer(){
    if(!socketServer){
        throw new Error('Socket has not been initialized. Call createSignalling first')
    }
    

    return socketServer
}
