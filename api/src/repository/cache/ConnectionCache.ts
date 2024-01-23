import Redis from 'ioredis'

export default class ConnectionCache{
    protected readonly clientCache: Redis
    
    constructor(){
        this.clientCache = new Redis({
            host: '127.0.0.1',
            port: 6379
        })
    }
}