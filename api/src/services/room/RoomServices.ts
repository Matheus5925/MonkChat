import { Room } from "@prisma/client";
import RoomRepository from "../../repository/database/RoomRepository";
import UserRepository from "../../repository/database/UserRepository";
import RoomException from "../../Errors/RoomException";

export default class RoomServices{
    private roomDB: RoomRepository = new RoomRepository();
    private userDB: UserRepository = new UserRepository();

    async createRoom(newRoom: Room): Promise<Room>{
        await RoomException.validationBody(newRoom)
        const ownerExist = await this.userDB.getUserToId(newRoom.ownerID);
        const roomAlreadyExists = await this.roomDB.getRoomToName(newRoom.name);

        if(!ownerExist){
            throw RoomException.RoomCannotBeCreated(`Room cannot be created because that not exist user with id: ${newRoom.ownerID}`);
        };

        if(roomAlreadyExists){
            throw RoomException.RoomCannotBeCreated(`Room cannot be created because already exist a room with this name`)
        }
        
        const room: Room = await this.roomDB.createRoom(newRoom);
        return room;
    }
}