import {test as myTest} from "@playwright/test";

type UserLogin = {
    email: string;
    password: string;
}

type Product = {
    size: number;
    item: string;
}

export const myFixtureTest = myTest.extend <UserLogin> ({
    email: 'vknseo@gmail.com',
    password: '!qw2Er4Ty6',
}) 

export const myFirstProduct = <Product[]>([
    {
    size: 192,
    item: 'rossignol x-ium skating wcs -s2 -ifp',
    }
])

export const url: string = 'http://192.168.1.30:3000/';

