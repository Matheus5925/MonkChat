import { PrismaClient } from "@prisma/client";

export default class ConnectionDB{
    protected readonly clientDB: PrismaClient;

    constructor(){
        this.clientDB = new PrismaClient();
    };
};