const { I, checkoutForm, checkoutFormPP35 } = inject();
const assert = require('assert');
Given('I access the checkout form Page', () => {
    checkoutForm.givenStep()
});
//PP-36
When('Enter the valid email address into the email field', () => {
    checkoutForm.submitBox();
    I.fillField('#accountEmail', 'bich@thu.com');
});
Then('The system accepts the input without displaying error message Invalid email', async () => {
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
    assert.equal(hexColor, '#202020');
});