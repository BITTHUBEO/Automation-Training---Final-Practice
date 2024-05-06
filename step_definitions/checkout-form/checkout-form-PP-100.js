const { I, checkoutForm, checkoutFormPP35} = inject();
const assert = require('assert');

Given('I access the checkout form Page', () => {
    checkoutForm.givenStep()
});
//PP-100
When('Enter a {string} containing special characters into the phone number field.', (phonenumber) => {
    checkoutForm.submitBox();
    I.fillField('#accountPhone', phonenumber);
});
Then('An error message Invalid Phone Number is displayed', async () => {
    checkoutForm.submitBox();
    const accPhoneColorValue = await I.grabCssPropertyFrom('#accountPhoneLabel','color');
    console.log(colorValue);
    const hexColor = checkoutFormPP35.functionRgbToHex(accPhoneColorValue);
    console.log(hexColor);
    assert.equal(hexColor, '#dd2c00');
});