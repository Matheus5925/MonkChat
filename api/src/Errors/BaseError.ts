export default class BaseError extends Error{
    public status;
    protected defaultMessage;
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

