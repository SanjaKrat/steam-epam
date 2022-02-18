export interface User {
    id: number, 
    nick: string, 
    age: number
    friendsIds: (number[]),
    email: string, 
    password: string
}