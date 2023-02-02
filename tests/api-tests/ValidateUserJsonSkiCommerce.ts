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
    await expect(user.name).toMatch('');
    await expect(user.email).toMatch('');
    await expect(user.password).toMatch('');
    user.isActivated ? 
    await expect(user.isActivated).toBe(true):
    await expect(user.isActivated).toBe(false);
    await expect(user.role).toBeGreaterThanOrEqual(0);
    await expect(user.cart).toBeInstanceOf(Array);
    await expect(user.activationLink).toMatch('');
    await expect(user._id).toMatch('');
    await expect(user.createdAt).toMatch('');
    await expect(user.updatedAt).toMatch('');
    await expect(user.token).toMatch('');

}