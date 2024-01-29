import { Request, Response } from "express";
import MessageServices from "../services/messages/MessagesServices";
import BaseError from "../Errors/BaseError";

const messageServices: MessageServices = new MessageServices();

export default class MessageControllers{


    public static async getMessageOfARoom(req: Request, resp: Response){
        try{

            const {id} = req.params;
            const {page = 1, limit = 200} = req.query;

            const pageNumber = Number(page);
            const quantityPerPage = Number(limit); 

            const roomID = parseInt(id);
            const allMessages = await messageServices.getAllMessagesOfARoom(roomID,pageNumber,quantityPerPage);

            resp.status(401).send({data: {...allMessages},
            meta:{

            }})
        }
        catch(err: any){
            if(err instanceof BaseError){
                err.respDefault(resp);
            }
            else{
                resp.status(500).send({message: err.message});
            };
        }
    }

}