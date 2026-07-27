import { Server } from "socket.io";

let io :Server|null = null

export function createSignalling(socket:Server){
    io = socket
}

export function getSocket(){
    if(!io){
        throw new Error("Socket has not been intialized. Call createSignalling first")
    }
    return io
}