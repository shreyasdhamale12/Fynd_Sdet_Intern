import { test, expect } from '@playwright/test';
import { CheckOutPage } from '../pages/checkOutPage';


test.describe('checkout test', () => {
  

  // test.describe.configure({ mode: 'serial' });
  
  test('Checking the whole flow of the application', async ({ page }) => {

    const check = new CheckOutPage(page);

    await check.navigateToCheckOutPage();

    await check.addProductToCart('Coffee Mug');
    await check.totalProducts(1);
    await check.totalItems(1);
    await check.totalAmount(250);

    await check.addProductToCart('Notebook');
    await check.totalProducts(2);
    await check.totalItems(2);
    await check.totalAmount(400);

    await check.enterCustomerName('Shreyas');
    await check.clickPlaceOrder();

    await check.verifyConfirmationMsgDisplayed();
    console.log(await check.getOrderRef());

  });


  test('Checking missing required field', async ({ page }) => {

    const check = new CheckOutPage(page);

    await check.navigateToCheckOutPage();

    await check.addProductToCart('Coffee Mug');
    await check.totalProducts(1);
    await check.totalItems(1);
    await check.totalAmount(250);

    await check.addProductToCart('Notebook');
    await check.totalProducts(2);
    await check.totalItems(2);
    await check.totalAmount(400);

    // await check.enterCustomerName('Shreyas');
    await check.clickPlaceOrder();
    await check.cutomerNameErrorMessgae();

    // await check.verifyConfirmationMsgDisplayed();

  });


  test('Verifying quantity change updates the exact total', async ({ page }) => {

    const check = new CheckOutPage(page);

    await check.navigateToCheckOutPage();

    await check.addProductToCart('Coffee Mug');
    await check.increaseQty('Coffee Mug', 3);
    await check.totalProducts(1);
    await check.totalItems(4);
    await check.totalAmount(1000);

    await check.addProductToCart('Notebook');
    await check.increaseQty('Notebook', 3);
    await check.totalProducts(2);
    await check.totalItems(8);
    await check.totalAmount(1600);

    await check.enterCustomerName('Shreyas');
    await check.clickPlaceOrder();
    // await check.cutomerNameErrorMessgae();

    await check.verifyConfirmationMsgDisplayed();

  });

})