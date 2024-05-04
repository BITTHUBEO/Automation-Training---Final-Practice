const { I, checkoutForm } = inject();
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
    const colorValue = await I.grabCssPropertyFrom('#checkoutForm > form > div.subsection.grid > section:nth-child(2) > div:nth-child(3) > shop-input > shop-md-decorator > label','color');
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
