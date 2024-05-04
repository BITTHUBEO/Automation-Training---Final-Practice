const { I, checkoutForm } = inject();
const assert = require('assert');


Given('I access the checkout form Page', () => {
    checkoutForm.givenStep()
});
//PP-109
When('Enter a {int} with a length below the required limit into the Zip Postal Code field', (code) => {
    checkoutForm.submitBox();
    I.fillField('#shipZip', code);
});
Then('An error message Invalid Zip Postal Code is displayed', async () => {
    checkoutForm.submitBox();
    const colorValue = await I.grabCssPropertyFrom('#shipZipLabel','color');
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
    I.wait(5)
});
