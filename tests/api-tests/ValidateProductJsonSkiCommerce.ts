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
        expect(typeof element._id).toBe(typeof '');
        expect(typeof element.productId).toBe(typeof '');
        expect(typeof element.slug).toBe(typeof '');
        expect(typeof element.title).toBe(typeof '');
        expect(typeof element.description).toBe(typeof '');
        expect(typeof element.img1).toBe (typeof '');
        expect(typeof element.img2).toBe(typeof '');
        expect(typeof element.img3).toBe(typeof '');
        expect(typeof element.category).toMatch('');
        expect(typeof element.brand).toMatch('');
        expect(element.size).toBeInstanceOf(Array);
        expect(typeof element.price).toBe(typeof 0);
        expect(typeof element.checked).toBe(typeof true);
        expect(typeof element.sold).toBe(typeof 0);
        expect(typeof element.updatedAt).toBe(typeof '');
        expect(typeof element.createdAt).toBe(typeof '');
    });   
}