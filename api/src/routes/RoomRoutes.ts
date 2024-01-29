import { Router } from "express";
import RoomControllers from "../controllers/RoomControllers";

const route = Router();

route
    .post('/v1/room', RoomControllers.createRoom)
    .get('/v1/room/search', RoomControllers.getRoomToName)
    .post('/v1/room/entry', RoomControllers.entryInRoom)

export default route;