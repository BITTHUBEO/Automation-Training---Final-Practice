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
Then('An error message Invalid Phone Number is displayed', async () => {
    checkoutForm.submitBox();
    const colorValue = await I.grabCssPropertyFrom('#accountPhoneLabel','color');
    console.log(colorValue);
    function rgbToHex(rgb) {
        rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
        return '#' + rgb.map(x => {
            x = parseInt(x).toString(16); 
            return (x.length === 1) ? '0' + x : x; 
        }).join('');
    }
    const hexColor = rgbToHex(colorValue);
    console.log(hexColor);
    assert.equal(hexColor, '#dd2c00');
});