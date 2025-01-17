import test, { expect } from "@playwright/test";
import exp from "constants";

test('TC01 - [Login] - User login with success', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await expect(await page.title()).toBe('Swag Labs');

    //Logando
    await page.locator('[data-test = "username"]').fill('standard_user');
    await page.locator('[data-test = "password"]').fill('secret_sauce');

    await page.locator('[data-test = "login-button"]').click();

});

test('TC02 - [Login] - User login with fail on password', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    
    //Fail Log
    await page.locator('[data-test = "username"]').fill('standard_user');
    await page.locator('[data-test = "password"]').fill('radom12345');

    await page.locator('[data-test = "login-button"]').click();

    const errorText = await page.getByText('Epic sadface: Username and password do not match any user in this service');
    await expect(errorText).toBeVisible();

    await expect
});

test('TC03 - [Login] - User login with fail on Username', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    
    //Fail Log
    await page.locator('[data-test = "username"]').fill('standard');
    await page.locator('[data-test = "password"]').fill('secret_sauce');

    await page.locator('[data-test = "login-button"]').click();

    const errorText = await page.getByText('Epic sadface: Username and password do not match any user in this service');
    await expect(errorText).toBeVisible();

    await expect
});

