export interface changeMessage{
    messageID: number
    userID: number
    message: string
}

export interface deleteMessage{
    userID: number
    messageID: number
}