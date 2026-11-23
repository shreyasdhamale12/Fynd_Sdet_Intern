import { Page, expect } from '@playwright/test';

export class CheckOutPage {

    readonly productSection;
    readonly yourCartSection;
    readonly checkoutSection;
    readonly confirmationSection;


    constructor(private page: Page) {
        this.productSection = page.locator('#products-section');
        this.yourCartSection = page.locator('#cart-section');
        this.checkoutSection = page.locator('#checkout-section');
        this.confirmationSection = page.locator('#confirmation-section');
    }

    async navigateToCheckOutPage() {
        await this.page.goto('http://127.0.0.1:5500/app/');
        await expect(this.page.getByRole('heading', { name: 'Mini Store' })).toBeVisible();
    }

    async addProductToCart(productName: string) {
        const productCard = this.productSection.locator('.product-card').filter({ has: this.page.getByRole('heading', { name: productName, exact: true }) });
        await productCard.getByRole('button', { name: 'Add to Cart' }).click();
    }

    async increaseQty(productName: string, times: number) {
        const increase = this.yourCartSection.locator('.cart-item').filter({ has: this.page.getByRole('heading', { name: productName }) });

        for (let i = 0; i < times; i++) {
            // await increase.getByRole('button', { name: '+' }).click();
            await increase.getByLabel(`Increase ${productName} quantity`).click();
        }
    }

    async decreaseQty(productName: string, times: number) {
        const decrease = this.yourCartSection.locator('.cart-item').filter({ has: this.page.getByRole('heading', { name: productName }) });

        for (let i = 0; i < times; i++) {
            // await decrease.getByRole('button', { name: '-' }).click();
            await decrease.getByLabel(`Decrease ${productName} quantity`).click();
        }
    }

    async removeBtn(productName: string) {
        const remove = this.yourCartSection.locator('.cart-item').filter({ has: this.page.getByRole('heading', { name: productName }) });
        await remove.getByRole('button', { name: 'Remove' }).click();
    }

    async totalProducts(totalProd: number) {
        const product = this.yourCartSection.locator('#cart-summary').getByRole('heading', { name: 'Products' }).locator('..').locator('p');
        await expect(product).toHaveText(String(totalProd));
    }

    async totalItems(totalItm: number) {
        const item = this.yourCartSection.locator('#cart-summary').getByRole('heading', { name: 'Total Items' }).locator('..').locator('p');
        await expect(item).toHaveText(String(totalItm));
    }

    async totalAmount(amt: number) {
        const amount = this.yourCartSection.getByRole('heading', { name: /Order Total/ });
        await expect(amount).toContainText(String(amt));
    }

    async checkCartButtonDisabled() {
        await expect(this.yourCartSection.getByRole('button', { name: 'Reset Cart' })).toBeDisabled();
    }

    async enterCustomerName(name: string) {
        await this.checkoutSection.getByRole('textbox', { name: 'Customer Name' }).fill(name);
    }

    async clickPlaceOrder() {
        await this.checkoutSection.getByRole('button', { name: 'Place Order' }).click();
    }

    async cutomerNameErrorMessgae() {
        await expect(this.checkoutSection).toContainText('Please enter your name to place the order.');
    }


    async verifyConfirmationMsgDisplayed() {
        await expect(this.confirmationSection).toContainText('Order placed successfully!');
    }

    async getOrderRef() {
        return (await this.confirmationSection.locator('#order-reference').textContent());
    }

}