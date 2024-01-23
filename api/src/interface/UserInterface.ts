export interface UserInternal{
    id?: number
    name: string
    password: string
    email: string
    createdAt: Date
    updateAt: Date
}

export interface changedPassword{
    name: string
    email: string,
    oldPassword: string,
    newPassword: string
}

export interface Login {
    email: string
    password: string
}
