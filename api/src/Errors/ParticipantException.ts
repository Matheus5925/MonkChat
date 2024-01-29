import { Participant } from "@prisma/client";
import BaseError from "./BaseError";

export default class ParticipantException extends BaseError{
    constructor(message:any, status?: number){
        super("ParticipantExceptions", message, status)
    }

    public static async validityBody(participant: Participant){
        if(!participant.roomID || !participant.userID)
            throw new ParticipantException("Some property were not informed, review the request body")
    }
}