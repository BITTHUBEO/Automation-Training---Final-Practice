const { I, checkoutForm } = inject();
const assert = require('assert');

Given('I access the checkout form Page', () => {
    checkoutForm.givenStep()
});
//PP-109
When('Enter a {int} with a length below the required limit into the Zip Postal Code field', (code) => {
    I.click('#submitBox');
    I.fillField('#shipZip', code);
});
Then('An error message Invalid Zip Postal Code is displayed', () => {
    I.click('#submitBox');
    I.see('Invalid Zip/Postal Code')
    I.wait(5)
});
