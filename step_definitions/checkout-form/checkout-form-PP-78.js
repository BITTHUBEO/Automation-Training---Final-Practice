const { I, checkoutForm } = inject();
const assert = require('assert');

Given('I access the checkout form Page', () => {
    checkoutForm.givenStep()
});
//PP-78
When('Select an expiry date that has already passed from the dropdown.', () => {
    I.selectOption('#ccExpMonth', 'Jan');
    I.selectOption('#ccExpYear', '2017');
});
Then('An error message Invalid Expiry is displayed',async () => {
    checkoutForm.submitBox();
    I.wait(5)
    const colorValue = await I.grabCssPropertyFrom('#checkoutForm > form > div.subsection.grid > section:nth-child(2) > div:nth-child(4) > div > label','color');
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
