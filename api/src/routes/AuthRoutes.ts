import AuthControllers from "../controllers/AuthControllers";
import { Router } from "express";

const route = Router()

route
    .post('/v1/oauth/login', AuthControllers.Login)

export default route;
