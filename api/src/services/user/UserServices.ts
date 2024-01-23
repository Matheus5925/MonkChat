import { UserInternal } from "../../interface/UserInterface";
import UserRepository from "../../repository/database/UserRepository";
import { hashPassword } from "../../utils/hash";
import UserException from "../../Errors/UserException";

export default class UserServices{
    private readonly repoUser: UserRepository = new UserRepository();
    
    async createUser(newUser: UserInternal): Promise<UserInternal | undefined>{
        const userExists = await this.repoUser.getInfoForEmail(newUser.email);

        if(userExists){
            throw UserException.UserCannotBeCreated();
        };

        newUser.password = hashPassword(newUser.password);
        const user = await this.repoUser.createAccount(newUser);

        return user;
    }

    async changeDatas(user: UserInternal){
        if(!user.id)
            throw UserException.UserCannotBeChanged("User id was not provided");

        if(user.password){
            user.password = hashPassword(user.password);
        }

        const userInfo = this.repoUser.changeInfoUser(user);
        return userInfo;
    }

    async getAllUsers(page: number, limit: number): Promise<UserInternal[]>{
        return await this.repoUser.getAllUsers(page, limit);
    }
};