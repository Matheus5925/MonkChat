import { Request, Response } from "express";
import RoomServices from "../services/room/RoomServices";
import BaseError from "../Errors/BaseError";
import { Participant, Room } from "@prisma/client";

const roomServices: RoomServices = new RoomServices();

export default class RoomControllers{

    public static async createRoom(req: Request, resp: Response){
        try {
            const room: Room = await {...req.body};
            const newRoom = await roomServices.createRoom(room);
            resp.status(201).send({data:{
                ...newRoom
            }});
            
        } catch (err: any) {
            if(err instanceof BaseError)
                err.respDefault(resp);
            else
                resp.send({message: err.message})
        }
    }

    public static async getRoomToName(req: Request, resp: Response){
        try {
            const { name } = req.query;
            const roomName = String(name);
            const room = await roomServices.getRoomToName(roomName);
            resp.status(200).send({data: {
                ...room
            }});
            
        } catch (err: any) {
            if(err instanceof BaseError)
                err.respDefault(resp);
            else
                resp.send({message: err.message});
        };
    }

    public static async entryInRoom(req: Request, resp: Response){
        try {
            const participantInfo: Participant = await {...req.body};
            const newParticipantInRoom: object = await roomServices.entryInRoom(participantInfo);

            resp.status(201).send({data:{
                ...newParticipantInRoom
            }})

            
        } catch (err: any) {
            if(err instanceof BaseError)
                err.respDefault(resp);
            else
                resp.send({message: err.message});
        };
    }
};