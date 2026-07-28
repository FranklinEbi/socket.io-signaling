import { getServer } from "./createSignaling.js";

export function answer(receiverSocketId:string,payload:any){
    const server = getServer()
    server.to(receiverSocketId).emit('answer',payload)
}