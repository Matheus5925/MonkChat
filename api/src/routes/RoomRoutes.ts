import { Router } from "express";
import RoomControllers from "../controllers/RoomControlleres";

const route = Router();

route
    .post('/v1/room', RoomControllers.createRoom)

export default route;