import { UserInternal } from "../interface/UserInterface";
import UserServices from "../services/user/UserServices";
import {Request, Response} from 'express';
import BaseError from "../Errors/BaseError";

const userService = new UserServices();

class UserControllers{ 

    public static async createAccount(req: Request, resp: Response){
        try {
            const user: UserInternal = await {...req.body};
            const newUser = await userService.createUser(user);
            resp.status(201).send({data: {
                ...newUser
            }});
            
        } catch (err: any) {
            if(err instanceof BaseError)
                err.respDefault(resp);
            else{
                resp.status(400).send({message: err.message});
            };
        };
    }


    public static async changedDataUser(req: Request, resp: Response){
        try {
            const user: UserInternal = await {...req.body};
            const userChanged = await userService.changeDatas(user);

            resp.status(200).send({data: {
                ...userChanged
            }});

        } catch (err: any) {
            if(err instanceof BaseError){
                err.respDefault(resp);
            }
            else{
                resp.status(400).send({message: err.message});
            };
        };
    }

    public static async getAllUsers(req: Request, resp: Response){
        try {
            const {page = 1, limit = 30} = req.query;
            
            const pageNumber = Number(page);
            const quantityPerPage = Number(limit);

            const allUser: Array<UserInternal> = await userService.getAllUsers(pageNumber, quantityPerPage); 

            resp.status(200).send({datas: allUser, meta: {
                pageNumber: pageNumber,
                quantityPerPage: quantityPerPage
            }})
            
        } catch (err: any) {
            if(err instanceof BaseError){
                err.respDefault(resp);
            }
            else{
                resp.status(400).send({message: err.message});
            };
        }
    }

    public static async changedPassword(req: Request, resp: Response){
        try{

            const info = await {...req.body}
            
            const userChanged = await userService.changedPassword(info);

            resp.status(204).send({
                message: 'Password change with sucefull'
            })

        } catch (err: any) {
            if(err instanceof BaseError){
                err.respDefault(resp);
            }
            else{
                resp.status(400).send({message: err.message});
            };
        }
    }

};

export default UserControllers;