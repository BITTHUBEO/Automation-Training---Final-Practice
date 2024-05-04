const { I, checkoutForm } = inject();
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
    const colorValue = await I.grabCssPropertyFrom('#checkoutForm > form > div.subsection.grid > section:nth-child(2) > div:nth-child(4) > shop-input > shop-md-decorator > label','color');
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
