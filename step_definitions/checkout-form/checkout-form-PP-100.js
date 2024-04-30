const { I, checkoutForm } = inject();
const assert = require('assert');

Given('I access the checkout form Page', () => {
    checkoutForm.givenStep()
});
//PP-100
When('Enter a {string} containing special characters into the phone number field.', (phonenumber) => {
    checkoutForm.submitBox();
    I.fillField('#accountPhone', phonenumber);
});
Then('An error message Invalid Phone Number is displayed', () => {
    checkoutForm.submitBox();
    checkoutForm.phoneErrorMessage();
});