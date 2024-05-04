const { I, checkoutForm } = inject();
const assert = require('assert');

Given('I access the checkout form Page', () => {
    checkoutForm.givenStep()
});
//PP-55
When('Enter {string} special characters and numeric characters into the field.', (statename) => {
    checkoutForm.submitBox();
    I.fillField('#shipState', statename);
});
Then('An error message Invalid State Province is displayed.', () => {
    checkoutForm.submitBox();
    I.wait(5);
    I.see('Invalid State/Province')
});