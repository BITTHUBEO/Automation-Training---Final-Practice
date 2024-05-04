const { I, checkoutForm } = inject();
const assert = require('assert');
Given('I access the checkout form Page', () => {
    checkoutForm.givenStep()
});
//PP-49
When ('Enter an address combination of alphanumeric characters into the field', () => {
    checkoutForm.submitBox();
    I.fillField('#shipAddressLabel', '123Xovietnghetinh');
});

Then('There are no error messages Invalid Phone Number is displayed.', async () => {
    checkoutForm.submitBox();
    I.wait(5);
    const colorValue = await I.grabCssPropertyFrom('#shipAddressLabel','color');
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