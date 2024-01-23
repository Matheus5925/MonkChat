import BaseError from "./BaseError"

export default class UserException extends BaseError{
    
    constructor(message:any, status?: number){
        super("UserExceptions", message, status)
    }

    public static UserCannotBeCreated(message: string = "User that you be try creating already exists"){
        return new UserException(message, 400)
    }
    
    public static UserCannotBeChanged(message: string){
        return new UserException(message, 400)
    }
}