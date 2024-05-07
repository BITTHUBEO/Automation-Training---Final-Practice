const { I, checkoutForm, checkoutFormPP35} = inject();
const assert = require('assert');

Given('I access the checkout form Page', () => {
    checkoutForm.givenStep()
});
//PP-71
When('Enter a {string} within the allowed limit digits but containing spaces into the Card Number field.', (cardnumber) => {
    I.fillField('#ccNumber', cardnumber);
});
Then('The error message Invalid Card Number displayed', async () => {
    checkoutForm.submitBox();
    I.wait(5)
    const ccnumberColorValue = await I.grabCssPropertyFrom('#checkoutForm > form > div.subsection.grid > section:nth-child(2) > div:nth-child(3) > shop-input > shop-md-decorator > label','color');
    console.log(ccnumberColorValue);
    const hexColor = checkoutFormPP35.functionRgbToHex(ccnumberColorValue);
    console.log(hexColor);
    assert.equal(hexColor, '#dd2c00');
});
