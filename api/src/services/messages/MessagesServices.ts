import { Messages } from "@prisma/client";
import MessageRepository from "../../repository/database/MessageRepository";
import UserRepository from "../../repository/database/UserRepository";
import MessageExceptions from "../../Errors/MessagesException";
import RoomRepository from "../../repository/database/RoomRepository";
import { changeMessage, deleteMessage } from "../../interface/MessageInterface";
import { createBrotliCompress } from "zlib";

export default class MessageServices{
    private readonly messageDB: MessageRepository = new MessageRepository();
    private readonly userDB: UserRepository = new UserRepository();
    private readonly roomDB: RoomRepository = new RoomRepository();

    public async getAllMessagesOfARoom(roomID: number, page: number, limit: number){
        const allMessages: Messages[] = await this.messageDB.getAllMessagesOfARoom(roomID, page, limit);

        return allMessages;
    }

    public async sendMessage(message: Messages): Promise<Messages | object>{
        const userSendingTheMessage = await this.userDB.getUserToId(message.sentById);
        
        if(!userSendingTheMessage){
            throw new MessageExceptions("User sending the message does not exist", 404);
        }

        const userIsParticipant = await this.userDB.userIsParticipant(message.RoomTheMessageID, message.sentById);

        if(!userIsParticipant){
            throw new MessageExceptions("User not is participant in this room", 400);
        }

        const roomExist = await this.roomDB.getRoomToId(message.RoomTheMessageID);

        if(!roomExist){
            throw new MessageExceptions("Room that you is sending message not exist", 400);
        }
        
        const messageSending = await this.messageDB.sendMessage(message);

        return messageSending;
    }

    public async changedMessage(newInfoMessage: changeMessage){
        const message = await this.messageDB.getMessageToId(newInfoMessage.messageID);

        let IsMessageAuthor: boolean = false;
        if(message){
            IsMessageAuthor = newInfoMessage.userID == message.sentById;
        }

        if(!IsMessageAuthor){
            throw new MessageExceptions("Cannot change message of other user", 403);
        }

        const messageChanged = await this.messageDB.changeMessage(newInfoMessage.messageID, newInfoMessage.message);
        return messageChanged;
    }

    public async deleteMessage(infoMessage: deleteMessage){
        const message = await this.messageDB.getMessageToId(infoMessage.messageID);
        let IsMessageAuthor: boolean = false;
        if(message){
            IsMessageAuthor = infoMessage.userID == message.sentById;
        }

        if(!IsMessageAuthor){
            throw new MessageExceptions("Cannot change message of other user", 403);
        }
        const messageWillDelete = await this.messageDB.deleteMessage(infoMessage.messageID);

        return messageWillDelete;
    } 
};