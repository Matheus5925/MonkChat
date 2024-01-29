import { Messages } from "@prisma/client";
import ConnectionDB from "./ConnectionPrismaDB";
import { equal } from "assert";

export default class MessageRepository extends ConnectionDB{

    public async getAllMessagesOfARoom(roomID: number, page: number,limit: number ): Promise<Messages[]>{
        const allMessages: Messages[] = await this.clientDB.messages.findMany({
            where:{
                RoomTheMessageID:{
                    equals: roomID
                }
            },
            skip: (page - 1) * limit,
            take: limit
        });
        
        return allMessages;
    }

    public async sendMessage(message: Messages): Promise<Messages>{

        message.createdAt = new Date();
        message.updateAt = new Date()

        const newMessage: Messages = await this.clientDB.messages.create({
            data: message
        });

        return newMessage;
    }

    public async changeMessage(messageID: number, newContextMessage: string){
        const updateAt = new Date();
        const messageChanged: Messages = await this.clientDB.messages.update({
            where:{
                id: messageID
            },
            data:{
                message: newContextMessage,
                updateAt: updateAt
            }
        })

        return messageChanged;
    }

    public async deleteMessage(messageID: number){
        const messageDeleted = await this.clientDB.messages.delete({
            where: {
                id: messageID
            }
        })

        return messageDeleted;
    }

    public async getMessageToId(messageID: number){
        const message = await this.clientDB.messages.findFirst({
            where:{
                id:{
                    equals: messageID
                }
            }
        })

        return message;
    }

}