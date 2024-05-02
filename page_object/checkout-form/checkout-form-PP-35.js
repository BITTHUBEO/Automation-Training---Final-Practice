const { I } = inject();
const assert = require("assert");
module.exports = {
  //PP-35
  errorMessageAccInfo() {
    I.seeElement('shop-md-decorator[error-message="Invalid Address"] label');
    I.seeElement(
      'shop-md-decorator[error-message="Invalid Zip/Postal Code"] label'
    );
    I.seeElement('shop-md-decorator[error-message="Invalid CVV"] label');
  },
  emailErrorMessage() {
    I.seeElement('shop-md-decorator[error-message="Invalid Email"] label');
  },
  phoneErrorMessage() {
    I.seeElement(
      'shop-md-decorator[error-message="Invalid Phone Number"] label'
    );
  },
  cityErrorMessage() {
    I.seeElement('shop-md-decorator[error-message="Invalid City"] label');
  },
  shipStateErrorMessage() {
    I.seeElement(
      'shop-md-decorator[error-message="Invalid State/Province"] label'
    );
  },
  shipZipErrorMessage() {
    I.seeElement(
      'shop-md-decorator[error-message="Invalid Zip/Postal Code"] label'
    );
  },
  async cardholderNameErrorMessage() {
    const displayValue = await I.grabCssPropertyFrom(
      "shop-input > shop-md-decorator",
      "display"
    );
    I.see("shop-input > shop-md-decorator", displayValue);
  },
  cardNumberErrorMessage() {
    I.seeElement(
      'shop-md-decorator[error-message="Invalid Card Number"] label'
    );
  },
  cvvErrorMessage() {
    I.see(
      "Invalid CVV",
      "#checkoutForm > form > div.subsection.grid > section:nth-child(2) > div:nth-child(4) > shop-input > shop-md-decorator"
    );
  },
  expErrorMessage() {
    I.see(
      "Invalid Expiry",
      "#checkoutForm > form > div.subsection.grid > section:nth-child(2) > div:nth-child(4"
    );
  },
};
