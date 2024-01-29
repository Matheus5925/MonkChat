import { Socket, Server, Namespace } from "socket.io";
import MessageServices from "../services/messages/MessagesServices";
import BaseError from "../Errors/BaseError";
import { changeMessage } from "../interface/MessageInterface";

const messageService = new MessageServices();

export default class MessagesSocketControllers{

    public static async sendMessage(socket: Socket, message: any, io: Server | Namespace){
        try {
            const newMessage = await messageService.sendMessage(message);

            io.emit('resp_message', newMessage)
            
        } catch (err: any) {
            if(err instanceof BaseError){
                socket.emit('error', {...err.defaultMessage});
            }
            else{
                socket.emit('error', {message: err.message});
            }
        }
    }

    public static async changeMessage(socket: Socket, newInfoMessage: changeMessage, io: Server | Namespace) {
        try {
            const messageChanged = await messageService.changedMessage(newInfoMessage);

            io.emit('resp_message', messageChanged);

            
        } catch (err: any) {
            if(err instanceof BaseError){
                socket.emit('error', err.defaultMessage);
            }
            else{
                socket.emit('error', {message: err.message});
            }
        }
    }
}