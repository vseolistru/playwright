import { expect } from "@playwright/test";

interface IProduct {
    _id: string;
    productId: string;
    slug: string;
    title: string;
    description: string; 
    img1: string;
    img2: string;
    img3: string;
    category: string;
    brand: string;
    size: string[];
    price: number;
    checked: boolean;
    sold: number;
    createdAt: string;
    updatedAt: string;
}



export const validateJson = async (json: IProduct[]) => {
    await json.forEach(element => {     
        expect(element._id).toMatch('');
        expect(element.productId).toMatch('');
        expect(element.slug).toMatch('');
        expect(element.title).toMatch('');
        expect(element.description).toMatch('');
        expect(element.img1).toMatch('');
        expect(element.img2).toMatch('');
        expect(element.img3).toMatch('');
        expect(element.category).toMatch('');
        expect(element.brand).toMatch('');
        expect(element.size).toBeInstanceOf(Array);
        expect(element.price).toBeGreaterThan(1);
        element.checked ? 
        expect(element.checked).toBe(!false):
        expect(element.checked).toBe(!true);
        expect(element.sold).toBeGreaterThanOrEqual(0);
        expect(element.createdAt).toMatch('');
        expect(element.updatedAt).toMatch('');
    });   
}