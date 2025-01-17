import test, { expect } from "@playwright/test";

test('TC01 - [Products] - Add products in the cart', async ({ page }) => {

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

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

});



test('TC02 - [Products] - Verify the Remove name', async ({ page }) => {

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

    //Clicar e remover do carrinho
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    const removeCart = await page.locator('[data-test="remove-sauce-labs-backpack"]');
    await expect(removeCart).toHaveText('Remove');

    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    const removeCart2 = await page.locator('[data-test="remove-sauce-labs-bike-light"]');
    await expect(removeCart2).toHaveText('Remove');

});

test('TC03 - [Products] Verify the name of the products "Sauce Labs" ', async ({page}) => {
    //Login Step
    await test.step('login', async () => {
        await page.goto('https://www.saucedemo.com/');
        await expect(await page.title()).toBe('Swag Labs');
        await page.locator('[data-test = "username"]').fill('standard_user');
        await page.locator('[data-test = "password"]').fill('secret_sauce');
        await page.locator('[data-test = "login-button"]').click();
    })
    


});

