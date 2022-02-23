export interface User {
    id: string, 
    username: string, 
    age?: string,
    friendsIds?: (string[]),
    library?: string[],
    email?: string, 
    password?: string
}