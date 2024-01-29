import { Participant, Room } from "@prisma/client";
import ConnectionDB from "./ConnectionPrismaDB";
import { RoomInternal } from "../../interface/RoomInterface";


export default class RoomRepository extends ConnectionDB{

    public async createRoom(newRoom: Room): Promise<Room>{
        const room = await this.clientDB.room.create({data:{
            ...newRoom
        }});
        
        return room;
    }

    public async entryInARoom(newParticipant: Participant): Promise<object>{
        const participant = await this.clientDB.participant.create({data:{
            ...newParticipant
        }});

        const participantReturn = await this.clientDB.participant.findMany({
            where:{
                id: {
                    equals: participant.id
                }
            },
            select:{
                room: {
                    select:{
                        id: true,
                        name: true
                    }
                },
                user: {
                   select:{
                    id: true,
                    name: true
                   }
                }
            }
        })

        return participantReturn[0];
    }

    public async getRoomToName(name: string): Promise<Room>{
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

    public async getRoomToId(roomID: number): Promise<Room>{
        const room = await this.clientDB.room.findMany({
            where: {
             id: {
                equals: roomID
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