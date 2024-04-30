const { I, menOuterwearPage, checkoutPage } = inject();
const assert = require('assert');

Given('I access the website', () => {
    I.amOnPage('https://shop.polymer-project.org/')
});
//PP-34
When('User views their cart by clicking the cart icon', async () => {
    checkoutPage.clickCartIcon();
});
Then('Then A clear notification about the empty cart should be displayed', async () => {
    I.wait(5);
    I.see('Your', '.empty-cart')
    I.seeElement('div > div:nth-child(1) > p > iron-icon');
    I.see(' is empty', '.empty-cart')
})
