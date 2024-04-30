const { I, menOuterwearPage, checkoutPage } = inject();
const assert = require('assert');

Given('I access the website', () => {
    I.amOnPage('https://shop.polymer-project.org/')
});
//PP-33
let totalProductInCart;
let totalPriceInCart;
let totalProductInCheckout;
let totalPriceInCheckout;
let adjustedNumber;
let totalProductInCartString;
When('User accesses the website and clicks on the cart icon to view the products in the cart.', async () => {
    checkoutPage.preConditionToViewCart();
    checkoutPage.clickCartIcon();
});
When('User reviews the products in the cart and decides to edit the items by changing quantities or removing products.', async () => {
    I.wait(5);
    I.click('div > div.detail > paper-icon-button');
    I.wait(5)
    menOuterwearPage.selectQuantity();
    I.wait(15)
    totalProductInCart = await I.grabNumberOfVisibleElements('.name');
    totalProductInCartString = totalProductInCart.toString();
    totalPriceInCart = await I.grabTextFrom('.subtotal');
    menOuterwearPage.clickCheckoutOption();
});
Then('Verify the product information displayed in the checkout form accurately reflects the modifications made by the user in the cart.', async () => {
    totalProductInCheckout = await I.grabNumberOfVisibleElements('.flex');
    adjustedNumber = totalProductInCheckout - 1;
    totalProductInCheckoutString = adjustedNumber.toString();
    totalPriceInCheckout = await I.grabTextFrom('#checkoutForm > form > div.subsection.grid > section:nth-child(2) > div.row.total-row > div:nth-child(2)');
    I.wait(5);
    assert.strictEqual(totalProductInCheckoutString, totalProductInCartString, 'Total products in checkout form does not match with cart');
    assert.strictEqual(totalPriceInCheckout, totalPriceInCart, 'Total price in checkout form does not match with cart');
})
