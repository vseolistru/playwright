import { expect, request, test } from "@playwright/test";
import { validateJson } from "./ValidateProductJsonSkiCommerce";
import { validateUserJson } from "./ValidateUserJsonSkiCommerce";

const PAGE_URL = [
    "http://localhost:3000/api/products?page=1",
    "http://localhost:3000/api/products?page=2",
    "http://localhost:3000/api/products?page=3"
];
const POST_PAGE = 'http://localhost:5000/api/users'

test ('Api GET products test ', async ({request}) => {
    
    for (let page of PAGE_URL) {
        const data = await request.get(page)
        expect(data.status()).toBe(200); 
        expect(data.ok()).toBeTruthy();
        const {products} = await data.json();
        validateJson(products);  
    } 
})

test ('Api POST products test ', async ({request}) => {
    const data = await request.post(`${POST_PAGE}`, {
        data: {
            "name": "some_seo",
            "email": "some@email.ru",
            "password": "!qw2Er4Ty6"
        },
        headers: {
            "Content": "application/json"
        }
    })
    expect(data.status()).toBe(200);
    expect(data.ok()).toBeTruthy(); 
    const user = await data.json();
    await validateUserJson(user);   

})