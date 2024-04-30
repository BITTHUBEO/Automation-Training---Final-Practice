const { I, menOuterwearPage, menOuterwearPagePP17 } = inject();

Given('I open Men\'s Outerwear Page', () => {
    menOuterwearPage.goToWebsite();
});
//PP-17
When('User clicks on the product to view its details', () => {
    menOuterwearPage.clickOnProduct();
})
Then('The product detail page should include product name, description, price, size, quantity, and buttons to add the product to the cart', () => {
    I.wait(10);
    menOuterwearPage.verifyProductDetailPage();
});
