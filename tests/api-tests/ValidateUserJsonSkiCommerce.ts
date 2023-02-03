import { expect } from "@playwright/test";

interface User {
  name: string;
  email: string;
  password: string;
  isActivated: boolean;
  role: number;
  cart: string[];
  activationLink: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  token: string;
}

export const validateUserJson = async (user: User) => {
    await expect(typeof(user.name)).toBe(typeof(''));
    await expect(typeof(user.email)).toBe(typeof(''));
    await expect(typeof (user.password)).toBe(typeof (''));    
    await expect(typeof (user.isActivated)).toBe(typeof (true));

    await expect(typeof(user.role)).toBe(typeof (0));
    await expect(user.cart).toBeInstanceOf(Array);
    await expect(typeof (user.activationLink)).toBe(typeof (''));
    await expect(typeof user._id).toMatch(typeof'');
    await expect(typeof user.createdAt).toBe(typeof'');
    await expect(typeof user.updatedAt).toBe(typeof'');
    await expect(typeof user.token).toBe(typeof '');

}