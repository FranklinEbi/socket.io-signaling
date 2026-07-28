import { getServer } from "./createSignaling.js"
export function offer(receiverSocketId:string,payload:any){
    const server = getServer()
    server.to(receiverSocketId).emit('offer',payload)
}