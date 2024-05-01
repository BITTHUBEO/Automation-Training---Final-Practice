const { I } = inject();
const assert = require('assert');
module.exports = {
    // insert your locators and methods here
    //PP-25
    verifyViewcartOption() {
        I.click('div:nth-child(3) > shop-button:nth-child(1)');
        I.seeInCurrentUrl('/cart');
    },
    clickCheckoutButton() {
        I.wait(5);
        I.click('div > div:nth-child(2) > div.checkout-box > shop-button');
    },
    verifyCheckoutPage() {
        I.seeInCurrentUrl('/checkout')
        I.seeElement('#checkoutForm > form')
    },

    async getProductInfoInCart() {
        totalProductInCart = await I.grabNumberOfVisibleElements('.name');
        totalProductInCartString = totalProductInCart.toString();
        totalPriceInCart = await I.grabTextFrom('.subtotal');
    },
    async getProductInfoCheckout() {
        totalProductInCheckout = await I.grabNumberOfVisibleElements('.flex');
        adjustedNumber = totalProductInCheckout - 1;
        totalProductInCheckoutString = adjustedNumber.toString();
        totalPriceInCheckout = await I.grabTextFrom('#checkoutForm > form > div.subsection.grid > section:nth-child(2) > div.row.total-row > div:nth-child(2)');
        return totalProductInCheckoutString;
    },
    compareProductInfo() {
        assert.strictEqual(totalProductInCheckoutString, totalProductInCartString, 'Total products in checkout form does not match with cart');
        assert.strictEqual(totalPriceInCheckout, totalPriceInCart, 'Total price in checkout form does not match with cart');
    }
}