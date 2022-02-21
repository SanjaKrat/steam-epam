export interface User {
    id: string | undefined, 
    username: string, 
    age?: string,
    friendsIds?: (string[]),
    library?: string[],
    email?: string, 
    password?: string
}