import axios from 'axios';
import { URL_base } from './config';
const api = axios.create({
    baseURL: URL_base
});

export default class APIMessage{
    static async getAllMessagesOfARoom(roomID) {
        const allMessages = await api.post(`/v1/message/${roomID}`);
    
        return allMessages.data
    };
   
}