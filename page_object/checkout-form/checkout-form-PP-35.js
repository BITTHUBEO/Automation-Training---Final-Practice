const { I } = inject();
const assert = require("assert");
module.exports = {
  //PP-35

  async addressErrorMessage () {
    const addColorValue = await I.grabCssPropertyFrom('#shipAddressLabel','color');
    const hexColor = this.functionRgbToHex(addColorValue);
    console.log(hexColor);
    assert.equal(hexColor, '#dd2c00');
  },
  async emailErrorMessage () {
    const mailColorValue = await I.grabCssPropertyFrom('#accountEmailLabel','color');
    const hexColor = this.functionRgbToHex(mailColorValue);
    console.log(hexColor);
    assert.equal(hexColor, '#dd2c00');

  },
  async phoneErrorMessage() {
    const phoneColorValue = await I.grabCssPropertyFrom('#accountPhoneLabel','color');
    const hexColor = this.functionRgbToHex(phoneColorValue);
    console.log(hexColor);
    assert.equal(hexColor, '#dd2c00');
  },
  async cityErrorMessage() {
    const cityColorValue = await I.grabCssPropertyFrom('#shipCityLabel','color');
    const hexColor = this.functionRgbToHex(cityColorValue);
    console.log(hexColor);
    assert.equal(hexColor, '#dd2c00');
  },
  async  shipStateErrorMessage() {
    const stateColorValue = await I.grabCssPropertyFrom('#shipStateLabel','color');
    const hexColor = this.functionRgbToHex(stateColorValue);
    console.log(hexColor);
    assert.equal(hexColor, '#dd2c00');
  },
  async shipZipErrorMessage() {
    const zipColorValue = await I.grabCssPropertyFrom('#shipZipLabel','color');
    const hexColor = this.functionRgbToHex(zipColorValue);
    console.log(hexColor);
    assert.equal(hexColor, '#dd2c00');
  },
  async cardholderNameErrorMessage() {
    const cardnameColorValue = await I.grabCssPropertyFrom('#checkoutForm > form > div.subsection.grid > section:nth-child(2) > div:nth-child(2) > shop-input > shop-md-decorator > label','color');
    const hexColor = this.functionRgbToHex(cardnameColorValue);
    console.log(hexColor);
    assert.equal(hexColor, '#dd2c00');
  },
  async cardNumberErrorMessage() {
    const cardnumColorValue = await I.grabCssPropertyFrom('#checkoutForm > form > div.subsection.grid > section:nth-child(2) > div:nth-child(3) > shop-input > shop-md-decorator > label','color');
    const hexColor = this.functionRgbToHex(cardnumColorValue);
    console.log(hexColor);
    assert.equal(hexColor, '#dd2c00');
  },
  async cvvErrorMessage() {
    const cvvColorValue = await I.grabCssPropertyFrom('#checkoutForm > form > div.subsection.grid > section:nth-child(2) > div:nth-child(4) > shop-input > shop-md-decorator > label','color');
    const hexColor = this.functionRgbToHex(cvvColorValue);
    console.log(hexColor);
    assert.equal(hexColor, '#dd2c00');
  },
  async expErrorMessage() {
    const expColorValue = await I.grabCssPropertyFrom('#checkoutForm > form > div.subsection.grid > section:nth-child(2) > div:nth-child(4) > div > label','color');
    const hexColor = this.functionRgbToHex(expColorValue);
    console.log(hexColor);
    assert.equal(hexColor, '#dd2c00');
  },

  functionRgbToHex(rgb) {
    rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
    return '#' + rgb.map(x => {
      x = parseInt(x).toString(16); 
      return (x.length === 1) ? '0' + x : x; 
    }).join('');
  },
};
