import type { Server } from "socket.io";
import { call } from "./call.js";
import { createSignalling } from "./createSignaling.js";
import { answer } from "./receive.js";
import { iceCandidate } from "./iceCandidate.js";


export function createSignallingServer(server:Server){
    createSignalling(server)
    return {
        call,
        answer,
        iceCandidate
    }
}
