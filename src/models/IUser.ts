export interface IUser {
    id: number
    name: string
    email: string
}

export interface UserState {
    users: IUser[]
    isLoading: boolean
    error: string
}