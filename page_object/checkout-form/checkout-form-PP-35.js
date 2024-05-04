const { I } = inject();
const assert = require("assert");
module.exports = {
  //PP-35

  async addressErrorMessage () {
    const colorValue = await I.grabCssPropertyFrom('#shipAddressLabel','color');
    return 
  },
  async emailErrorMessage () {
    const colorValue = await I.grabCssPropertyFrom('#accountEmailLabel','color');
    return 

  },
  async phoneErrorMessage() {
    const colorValue = await I.grabCssPropertyFrom('#accountPhoneLabel','color');
    return 
  },
  async cityErrorMessage() {
    const colorValue = await I.grabCssPropertyFrom('#shipCityLabel','color');
    return 
  },
  async  shipStateErrorMessage() {
    const colorValue = await I.grabCssPropertyFrom('#shipStateLabel','color');
    return 
  },
  async shipZipErrorMessage() {
    const colorValue = await I.grabCssPropertyFrom('#shipZipLabel','color');
    return 
  },
  async cardholderNameErrorMessage() {
    const colorValue = await I.grabCssPropertyFrom('#checkoutForm > form > div.subsection.grid > section:nth-child(2) > div:nth-child(2) > shop-input > shop-md-decorator > label','color');
    return 
  },
  async cardNumberErrorMessage() {
    const colorValue = await I.grabCssPropertyFrom('#checkoutForm > form > div.subsection.grid > section:nth-child(2) > div:nth-child(3) > shop-input > shop-md-decorator > label','color');
    return 
  },
  async cvvErrorMessage() {
    const colorValue = await I.grabCssPropertyFrom('#checkoutForm > form > div.subsection.grid > section:nth-child(2) > div:nth-child(4) > shop-input > shop-md-decorator > label','color');
    return 
  },
  async expErrorMessage() {
    const colorValue = await I.grabCssPropertyFrom('#checkoutForm > form > div.subsection.grid > section:nth-child(2) > div:nth-child(4) > div > label','color');
    return 
  },
  async convertRGBtoHexAndAssertInvalidColor() {
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
  },
  /*async assertInvalidColor () {
    const hexColor = await this.convertFromRGBtoHex();
    assert.equal(hexColor, '#dd2c00');
  },
  async assertValidColor () {
    const hexColor = await this.convertFromRGBtoHex();
    assert.equal(hexColor, '#202020');
  },*/
  functionRgbToHex(){
    function rgbToHex(rgb) {
        rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
        return '#' + rgb.map(x => {
            x = parseInt(x).toString(16); 
            return (x.length === 1) ? '0' + x : x; 
        }).join('');
    }
  }
};
