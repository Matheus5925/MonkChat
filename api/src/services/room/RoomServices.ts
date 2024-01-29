import { Participant, Room } from "@prisma/client";
import RoomRepository from "../../repository/database/RoomRepository";
import UserRepository from "../../repository/database/UserRepository";
import RoomException from "../../Errors/RoomException";
import ParticipantException from "../../Errors/ParticipantException";

export default class RoomServices{
    private roomDB: RoomRepository = new RoomRepository();
    private userDB: UserRepository = new UserRepository();

    public async createRoom(newRoom: Room): Promise<Room>{
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

    public async getRoomToName(name: string){
        if(!name){
            throw new RoomException("Room name not specified", 400)
        }

        const room: Room = await this.roomDB.getRoomToName(name);
        if(!room){
            throw RoomException.RoomNotFound();
        };

        return room;
    }

    public async entryInRoom(participantInfo: Participant){
        await ParticipantException.validityBody(participantInfo);
        const newParticipantInRoom = await this.roomDB.entryInARoom(participantInfo);

        return newParticipantInRoom;
    }

    public async getRoomToId(roomID: number){
        if(!roomID){
            throw new RoomException("Room id not specified", 400)
        }

        const room: Room = await this.roomDB.getRoomToId(roomID);
        
        if(!room){
            throw RoomException.RoomNotFound();
        };

        return room;
    }
};