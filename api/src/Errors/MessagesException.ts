import BaseError, { defaultMessageError } from "./BaseError";

export default class MessageExceptions extends BaseError{
    public respToWebsocket: defaultMessageError;

    constructor(message:any, status?: number){
        super("MessageExceptions", message, status)
        this.respToWebsocket = this.defaultMessage;
        delete this.respToWebsocket.error.status;
    }

}