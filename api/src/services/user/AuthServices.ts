import LoginError from "../../Errors/LoginError"
import UserRepository from "../../repository/database/UserRepository"
import {sign, SignOptions} from 'jsonwebtoken'
import { comparePasswords } from "../../utils/hash" 
import { Login } from "../../interface/UserInterface"

import * as dotenv from 'dotenv';
dotenv.config();



export default class AuthServices{
    private readonly userDB: UserRepository = new UserRepository()

    async Login({email, password}: Login): Promise<object>{
        
        if(!email || !password){
            throw LoginError.credentialsNotInformed();
        }
        
        const userExist = await this.userDB.getInfoForEmail(email)
        let token: string = ''
        
        if(!userExist){
            throw LoginError.loginDenied("User not registry", 400);
        }
        
        const passwordIsValid: boolean = comparePasswords(password, userExist.password);

        if(passwordIsValid){
            const payload = {
                id: userExist.id,
                name: userExist.name,
                email: userExist.email,
                createdAt: userExist.createdAt,
                updateAt: userExist.updateAt
            }

            const options: SignOptions = {
                expiresIn: '7d'
            } 
            

            token = sign(payload, `${process.env.PRIVATE_KEY}`, options)
        }
        else{
            throw LoginError.credentialsInvalids()
        }
        return {token}
    }
}