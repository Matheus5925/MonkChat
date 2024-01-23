import { Participant, Room } from "@prisma/client";
import ConnectionDB from "./ConnectionPrismaDB";
import { RoomInternal } from "../../interface/RoomInterface";


export default class RoomRepository extends ConnectionDB{

    async createRoom(newRoom: Room): Promise<Room>{
        const room = await this.clientDB.room.create({data:{
            ...newRoom
        }});
        
        return room;
    }

    async entryInARoom(newParticipant: Participant){
        const participant = await this.clientDB.participant.create({data:{
            ...newParticipant
        }});

        return participant;
    }

    async getRoomToName(name: string): Promise<Room>{
        const room = await this.clientDB.room.findMany({
           where: {
            name: {
                equals: name
            }
           },
           select:{
            id: true,
            name: true,
            ownerID: true
           }
        })

        return room[0]
    }
}