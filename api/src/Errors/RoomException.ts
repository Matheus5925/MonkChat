import { Room } from "@prisma/client";
import BaseError from "./BaseError";

export default class RoomException extends BaseError{
    constructor(message:any, status?: number){
        super("RoomExceptions", message, status)
    }

    public static RoomCannotBeCreated(message: string){
        return new RoomException(message, 400)
    }

    public static async validationBody(room: Room){
        if(!room.name || !room.ownerID){
            throw new RoomException("Some property were not informed, review the request body")
        }
    }

    public static async RoomNotFound(){
        return new RoomException("Room not registered on base", 404)
    }

}