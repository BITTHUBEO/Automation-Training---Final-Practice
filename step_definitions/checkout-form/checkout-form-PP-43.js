const { I, checkoutForm } = inject();
const assert = require('assert');

Given('I access the checkout form Page', () => {
    checkoutForm.givenStep()
});
//PP-43
When('Enter the {string} address missing @ symbol into the email field.', (email) => {
    checkoutForm.submitBox();
    I.fillField('#accountEmail', email);
});
Then('An error message Invalid email is displayed indicating that the email address is invalid', async () => {
    checkoutForm.submitBox();
    I.wait(5);
    const colorValue = await I.grabCssPropertyFrom('#accountEmailLabel','color');
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

