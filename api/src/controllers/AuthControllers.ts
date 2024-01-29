import BaseError from "../Errors/BaseError";
import AuthServices from "../services/user/AuthServices";
import { Request, Response } from "express";

const authServices: AuthServices = new AuthServices();


export default class AuthControllers{
    public static async Login(req: Request, resp: Response){
        try {
            const {email, password} = req.body;
            
            const login = await authServices.Login({email, password});

            resp.status(200).send(login);

        } catch (err: any) {
            if(err instanceof BaseError){
                err.respDefault(resp);
            }
        }
    }
}