import { User } from "./user.type";



export function getStandardUserLogin():User{
    /* if (!process.env.EMAIL || !process.env.PASSWORD) {
        throw new Error("Missing required environment variables: EMAIL or PASSWORD");
    } */
    return{
        username: 'janak99@outlook.com',
        password: 'qweqwe123'
    }
}

export function getSauceUserLogin():User{
    /* if (!process.env.EMAIL || !process.env.PASSWORD) {
        throw new Error("Missing required environment variables: EMAIL or PASSWORD");
    } */
    return{
        username: 'standard_user',
        password: 'secret_sauce'
    }
}