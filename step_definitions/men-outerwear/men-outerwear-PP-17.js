const { I, menOuterwearPagePP13, menOuterwearPagePP17} = inject();

Given('I open Men\'s Outerwear Page', () => {
    menOuterwearPagePP13.goToWebsite();
});
//PP-17
When('User clicks on the product to view its details', () => {
    menOuterwearPagePP17.clickOnProduct();
})
Then('The product detail page should include product name, description, price, size, quantity, and buttons to add the product to the cart', () => {
    I.wait(10);
    menOuterwearPagePP17.verifyProductDetailPage();
});
