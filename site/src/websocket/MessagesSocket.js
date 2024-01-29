import { Socket } from 'socket.io-client';

export default class MessagesSocket{
   /**
    * @param {Socket} socket 
    * @param {object} message 
    */

    static async sendMessage(socket, message){
        let resp;

        socket.emit('new_message', message);

        socket.on('resp_message', (data)=>{
            resp = data
        })

        return data;
    }
}