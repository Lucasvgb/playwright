import test, { expect } from "@playwright/test";

test('TC01 - Verify the header', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await expect(await page.title()).toBe('Swag Labs');

    //Logando
    await page.locator('[data-test = "username"]').fill('standard_user');
    await page.locator('[data-test = "password"]').fill('secret_sauce');

    await page.locator('[data-test = "login-button"]').click();
    
    //Verificar url
    await expect(await page.url()).toBe('https://www.saucedemo.com/inventory.html');

    const productPage = await page.locator('[data-test="title"]');
    await expect(productPage).toHaveText('Products');


});