import {Namespace, Socket, Server} from 'socket.io'

export default class BaseWebsocket{
    protected io: Namespace | Server;
    protected socket: Socket;

    constructor(socket: Socket, io: Server | Namespace){
        this.io = io;
        this.socket = socket;
    }
};