const { I, checkoutForm, checkoutFormPP35 } = inject();
const assert = require("assert");

Given("I access the checkout form Page", () => {
  checkoutForm.givenStep();
});
//PP-43
When(
  "Enter the {string} address missing @ symbol into the email field.",
  (email) => {
    checkoutForm.submitBox();
    I.fillField("#accountEmail", email);
  }
);
Then(
  "An error message Invalid email is displayed indicating that the email address is invalid",
  async () => {
    checkoutForm.submitBox();
    I.wait(5);
    const colorValue = await I.grabCssPropertyFrom(
      "#accountEmailLabel",
      "color"
    );
    const hexColor = checkoutFormPP35.functionRgbToHex(colorValue);
    console.log(hexColor);
    assert.equal(hexColor, "#dd2c00");
  }
);
