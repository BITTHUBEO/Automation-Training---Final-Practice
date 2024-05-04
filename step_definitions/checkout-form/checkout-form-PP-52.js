const { I, checkoutForm } = inject();
const assert = require('assert');

Given('I access the checkout form Page', () => {
    checkoutForm.givenStep()
});
//PP-52
When('Enter city name wwith whitespace characters into the city field.', () => {
    checkoutForm.submitBox();
    I.fillField('#shipCity', '        ');
    I.wait(5)
});
Then('An error message Invalid City is displayed', async () => {
    checkoutForm.submitBox();
    checkoutForm.submitBox();
    I.wait(5);
    const colorValue = await I.grabCssPropertyFrom('#shipCityLabel','color');
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