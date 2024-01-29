import { Socket, Namespace, Server } from "socket.io";
import BaseWebsocket from "./BaseWebsocket";
import { changeMessage } from "../interface/MessageInterface";
import MessagesSocketControllers from "./MessageSocketControllers";





export default class MessagesSocket extends BaseWebsocket{

    constructor(socket: Socket, io: Namespace | Server) {
        super(socket, io)
    }

    public async eventMessages(){
        this.socket.on('new_message', async (message: any)=>{
            MessagesSocketControllers.sendMessage(this.socket, message, this.io)
        })

        this.socket.on('change_message', async (newInfoMessage: changeMessage)=>{
            MessagesSocketControllers.changeMessage(this.socket,newInfoMessage,this.io);
        })

        this.socket.on('delete_message', async (teste)=>{
            this.socket.emit('resp_message', {message: 'teste', body: teste})
        })
    }
}