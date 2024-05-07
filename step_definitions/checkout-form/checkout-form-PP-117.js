const { I, checkoutForm, checkoutFormPP98} = inject();
const assert = require('assert');

Given('I access the checkout form Page', () => {
    checkoutForm.givenStep()
});
//PP-117
When('User click finish button on page', () => {
    checkoutFormPP98.fillAllValidInfo()
    checkoutForm.submitBox();
    I.click('shop-button')
});
Then('The user has been redirected back to the website home page', async () => {
    I.amOnPage('https://shop.polymer-project.org/')
});