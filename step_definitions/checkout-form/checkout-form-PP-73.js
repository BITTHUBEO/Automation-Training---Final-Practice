const { I, checkoutForm, checkoutFormPP35 } = inject();
const assert = require('assert');

Given('I access the checkout form Page', () => {
    checkoutForm.givenStep()
});
//PP-73
When('Enter {string} with special characters or letters into the CVV field.', async (cvv) => {
    I.fillField('#ccCVV', cvv);
});
Then('The error message Invalid CVV is displayed',async () => {
    checkoutForm.submitBox();
    I.wait(5)
    const cvvColorValue = await I.grabCssPropertyFrom('#checkoutForm > form > div.subsection.grid > section:nth-child(2) > div:nth-child(4) > shop-input > shop-md-decorator > label','color');
    console.log(cvvColorValue);
    const hexColor = checkoutFormPP35.functionRgbToHex(cvvColorValue);
    console.log(hexColor);
    assert.equal(hexColor, '#dd2c00');
});
