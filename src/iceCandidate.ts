import { getServer } from "./createSignaling.js";

export function iceCandidate(receiverSocketId:string,payload:any){
    const server = getServer()
    server.to(receiverSocketId).emit('ice-candidate',payload)
}