import ConnectionDB from "./ConnectionPrismaDB";
import { UserInternal, changedPassword } from "../../interface/UserInterface";
import { User, Participant } from "@prisma/client";

export default class UserRepository extends ConnectionDB{

    public async createAccount(newUser: UserInternal): Promise<User>{
        newUser.updateAt = new Date();
        newUser.createdAt = new Date();
        const user = await this.clientDB.user.create({data:{
            ...newUser
        }});
        
        return user;
    }

    public async getAllUsers(page: number, limit: number): Promise<UserInternal[]>{
        return await this.clientDB.user.findMany({
            skip: (page - 1) * limit,
            take: limit
        })
    }

    public async getUserToId(userID: number): Promise<UserInternal | null>{
        const user = await this.clientDB.user.findUnique({
            where: {
                id: userID
            }
        });
        return user;
    }

    public async changeInfoUser(newInforUser: UserInternal): Promise<object>{
        newInforUser.updateAt = new Date()
        const userChanged = await this.clientDB.user.update({data:{
            ...newInforUser
        },
        where:{
            id: newInforUser.id
        }})

        return userChanged;
    }

    public async getInfoForEmail(email: string): Promise<UserInternal>{
        const inforUser = await this.clientDB.user.findMany({
            where: {
                email: {
                    equals: email
                }
            },
            select:{
                id: true,
                name: true,
                email: true,
                password: true,
                createdAt: true,
                updateAt: true
            }
        });

        return inforUser[0]
    }

    public async changePassword(changedPassword: changedPassword){
        const userChangedPassword = await this.clientDB.user.updateMany({
            data:{
                password: changedPassword.newPassword
            },
            where:{
                email: {equals: changedPassword.email},
                name: {equals: changedPassword.name},
                password: {equals: changedPassword.oldPassword}
            }
        });

        return userChangedPassword;
    }

    public async userIsParticipant(roomID: number,userID: number){
        const user = await this.clientDB.participant.findFirst({
            where:{
                roomID: {
                    equals: roomID
                },
                userID:{
                    equals: userID
                }
            }
        })

        return user;
    }

};