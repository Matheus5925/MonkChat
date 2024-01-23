import { Request, Response } from "express";
import RoomServices from "../services/room/RoomServices";
import BaseError from "../Errors/BaseError";
import { Room } from "@prisma/client";

const roomServices: RoomServices = new RoomServices()

export default class RoomControllers{

    static async createRoom(req: Request, resp: Response){
        try {
            const room: Room = await {...req.body};
            const newRoom = await roomServices.createRoom(room);
            resp.status(201).send(newRoom);
            
        } catch (err: any) {
            if(err instanceof BaseError)
                err.respDefault(resp);
            else
                resp.send({message: err.message})
        }

    }
}