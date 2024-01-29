import { Router } from "express";
import UserControllers from "../controllers/UserControllers";
import { verifyAccessToken } from "../middleware/OauthVerify";


const route = Router()


route
    .post('/v1/user/create/account', UserControllers.createAccount)
    .put('/v1/user', verifyAccessToken, UserControllers.changedDataUser)
    .get('/v1/user', UserControllers.getAllUsers)
    .put('/v1/user/change/password', verifyAccessToken ,UserControllers.changedPassword)
export default route;