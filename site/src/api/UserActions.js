import axios from 'axios';
import { URL_base } from './config';
const api = axios.create({
    baseURL: URL_base
});

export default class ActionsUser{
    static async Login(email, password) {
        const response = await api.post('/v1/oauth/login', {
            email: email,
            password: password
        });

        return response.data;
    };
    
    static async createAccount({name, email, password}){
        const account = await api.post('/v1/user/create/account', {
            name: name,
            email: email,
            password: password
        });

        return account.data;
    } 
    
    static async getRoomToName(nomeSala) {
        const room = await api.get(`/v1/room/search?name=${nomeSala}`);
    
        return room.data;
    }

    static async createRoom(name, ownerID){
        const newRoom = await api.post('/v1/room', {
            name: name,
            ownerID: ownerID
        })

        return newRoom.data;
    }
    
    static async entryInRoom(userID, roomID) {
        const r = await api.post(`/v1/room/entry`, {
            userID: userID,
            roomID: roomID
        });
    
        return r.data;
    };
    

}