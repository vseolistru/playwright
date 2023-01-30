import {test as myTest} from "@playwright/test";

type User = {
    email: string;
    password: string;
}


const myFixtureTest = myTest.extend <User> ({
    email: 'vknseo@gmail.com',
    password: '!qw2Er4Ty6',
}) 

export const testFixture = myFixtureTest;

