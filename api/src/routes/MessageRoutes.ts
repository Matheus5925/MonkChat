import { Router } from "express";
import MessageControllers from "../controllers/MessageControllers";

const route = Router();

route
    .get('/v1/message/:roomID', MessageControllers.getMessageOfARoom)

export default route;