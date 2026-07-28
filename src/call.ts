import { getServer } from "./createSignaling.js";

export function call(receiverSocketId:string,payload:any){
    const server = getServer()
    server.to(receiverSocketId).emit('call',payload)
}