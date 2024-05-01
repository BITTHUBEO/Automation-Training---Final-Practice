const { I, menOuterwearPagePP13, menOuterwearPagePP21, menOuterwearPagePP17 } = inject();



Given('I open Men\'s Outerwear Page', () => {
    menOuterwearPagePP13.goToWebsite();
});


//PP-21
When('User selects the quantity of the product to purchase.', async () => {
    menOuterwearPagePP17.clickOnProduct();
    I.wait(10);
    menOuterwearPagePP21.selectQuantity();
})
When('User selects the size of product', async () => {
    menOuterwearPagePP21.selectSize();
})
When('User clicks on the Add to Cart button.', async () => {
    menOuterwearPagePP21.clickAddToCartButton();
})
Then('Confirmation dialog box displayed to notify that the product has been "Added to cart", with 2 options "view cart" and "checkout" for the user to perform the next action of shopping', () => {
    I.wait(10);
    menOuterwearPagePP21.verifyConfirmationBox();
});