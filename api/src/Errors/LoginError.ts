import { log } from "console";
import { Login } from "../interface/UserInterface";
import BaseError from "./BaseError";

export default class LoginError extends BaseError{
    constructor(message?:string, status?: number){
        super("LoginError", message, status)
    }

    public static credentialsInvalids(){
        return new LoginError("Login or password are invalid", 401)
    }

    public static loginDenied(message: string, code: number){
        return new LoginError(message, code)
    }

    public static credentialsNotInformed(){
        return new LoginError("Login or password were not provided", 400)
    }
}