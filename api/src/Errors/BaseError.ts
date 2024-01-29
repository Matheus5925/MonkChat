export interface defaultMessageError{
    error: {
        status?: number
        origin: string
        message: string
    }
}


export default class BaseError extends Error{
    public status;
    public defaultMessage: defaultMessageError;
    constructor(name:string ,message:any, status:number = 500){
        super(message)
        this.name = name
        this.status = status
        this.defaultMessage = {
            error:{
                origin: this.name,
                message: this.message,
                status: this.status
            }
        }
    }

    async respDefault(response: any){
        response.status(this.status).send(this.defaultMessage);
    }

}

