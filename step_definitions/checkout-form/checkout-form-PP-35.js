const { I, checkoutForm, checkoutFormPP35 } = inject();
const assert = require('assert');

Given('I access the checkout form Page', () => {
  checkoutForm.givenStep()
});
//PP-35
When('Click on the Place Order button', () => {
  checkoutForm.submitBox();
});
Then('The system displays error messages corresponding to each required field in the checkout form', () => {
  I.wait(10)
  checkoutFormPP35.emailErrorMessage();
  checkoutFormPP35.convertFromRGBtoHex();
  checkoutFormPP35.assertInvalidColor();
  checkoutFormPP35.phoneErrorMessage();
  checkoutFormPP35.convertFromRGBtoHex();
  checkoutFormPP35.assertInvalidColor();
  checkoutFormPP35.cityErrorMessage();
  checkoutFormPP35.convertFromRGBtoHex();
  checkoutFormPP35.assertInvalidColor();
  checkoutFormPP35.shipStateErrorMessage();
  checkoutFormPP35.convertFromRGBtoHex();
  checkoutFormPP35.assertInvalidColor();
  checkoutFormPP35.shipZipErrorMessage();
  checkoutFormPP35.convertFromRGBtoHex();
  checkoutFormPP35.assertInvalidColor();
  checkoutFormPP35.cardholderNameErrorMessage();
  checkoutFormPP35.convertFromRGBtoHex();
  checkoutFormPP35.assertInvalidColor();
  checkoutFormPP35.cardNumberErrorMessage();
  checkoutFormPP35.convertFromRGBtoHex();
  checkoutFormPP35.assertInvalidColor();
  checkoutFormPP35.addressErrorMessage ();
  checkoutFormPP35.convertFromRGBtoHex();
  checkoutFormPP35.assertInvalidColor();
});