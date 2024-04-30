const { I, menOuterwearPage, menOuterwearPagePP13 } = inject();


Given('I open Men\'s Outerwear Page', () => {
    menOuterwearPage.goToWebsite();
});

//PP-13
When('User verifies the information for each product', () => {
});
Then('The total number of products on the page is displayed', () => {
    I.see('(16 items)', 'span');
});
Then('All products displayed on the page include image, product names and prices', async () => {
    menOuterwearPagePP13.getNumberOfProduct();
    menOuterwearPagePP13.verifyProductInformation();
});