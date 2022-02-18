import { User } from "../models/user";

export const Users: User[] = [
    {
        id: 0,
        nick: 'oleksandr',
        age: 27,
        friendsIds: [1, 8, 9], 
        email: 'test@epam.com',
        password: 'test1'
    },
    {
        id: 1,
        nick: 'nagibator',
        age: 27,
        friendsIds: [],
        email: 'nagibator@gmail.com',
        password: 'qwerty1'
    },
    {
        id: 2,
        nick: 'XxxxX',
        age: 27,
        friendsIds: [],
        email: 'XxxxX@gmail.com',
        password: '12345q'
    },
    {
        id: 3,
        nick: 'born_2005',
        age: 27,
        friendsIds: [],
        email: 'born_2005@gmail.com',
        password: 'zxcvb'
    },
    {
        id: 4,
        nick: 'boomer',
        age: 27,
        friendsIds: [],
        email: 'boomer@gmail.com',
        password: 'test2022'
    },
    {
        id: 5,
        nick: 'Sanja',
        age: 27,
        friendsIds: [],
        email: 'Sanja@gmail.com',
        password: 'test0000'
    },
    {
        id: 6,
        nick: 'vip777',
        age: 27,
        friendsIds: [],
        email: 'vip777@gmail.com',
        password: 'test'
    },
    {
        id: 7,
        nick: 'doomer',
        age: 27,
        friendsIds: [],
        email: 'doomer@gmail.com',
        password: 'test'
    },
    {
        id: 8,
        nick: 'dead_inside',
        age: 27,
        friendsIds: [],
        email: 'dead_inside@gmail.com',
        password: 'test'
    },
    {
        id: 9,
        nick: 'Volodymyr',
        age: 27,
        friendsIds: [0, 6, 7],
        email: 'volodymyr_vasylkivskyi@epam.com',
        password: 'test'
    }
]