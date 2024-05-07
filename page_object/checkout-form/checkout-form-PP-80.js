const { I, checkoutFormPP35 } = inject();
const assert = require("assert");
module.exports = {
  //PP-80
  async billAddress() {
    const billAddColorValue = await I.grabCssPropertyFrom(
      "#billAddressLabel",
      "color"
    );
    const hexColor = checkoutFormPP35.functionRgbToHex(billAddColorValue);
    console.log(hexColor);
    assert.equal(hexColor, "#dd2c00");
  },
  async billCity() {
    const billCityColorValue = await I.grabCssPropertyFrom(
      "#billCityLabel",
      "color"
    );
    const hexColor = checkoutFormPP35.functionRgbToHex(billCityColorValue);
    console.log(hexColor);
    assert.equal(hexColor, "#dd2c00");
  },
  async billState() {
    const billStateColorValue = await I.grabCssPropertyFrom(
      "#billStateLabel",
      "color"
    );
    const hexColor = checkoutFormPP35.functionRgbToHex(billStateColorValue);
    console.log(hexColor);
    assert.equal(hexColor, "#dd2c00");
  },
  async billZip() {
    const billZipColorValue = await I.grabCssPropertyFrom(
      "#billZipLabel",
      "color"
    );
    const hexColor = checkoutFormPP35.functionRgbToHex(billZipColorValue);
    console.log(hexColor);
    assert.equal(hexColor, "#dd2c00");
  },
};
