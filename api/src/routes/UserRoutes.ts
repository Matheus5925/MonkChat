import { Router } from "express";
import UserControllers from "../controllers/UserControllers";
import { verifyAccessToken } from "../middleware/OauthVerify";


const route = Router()


route
    .post('/v1/user', UserControllers.createAccount)
    .put('/v1/user', verifyAccessToken, UserControllers.changedDataUser)
    .get('/v1/user', UserControllers.getAllUsers)
export default route;