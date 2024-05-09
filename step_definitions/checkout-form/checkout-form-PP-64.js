const { I, checkoutForm, checkoutFormPP35 } = inject();
const assert = require("assert");

Given("I access the checkout form Page", () => {
  checkoutForm.givenStep();
});
//PP-64
When(
  "Enter {string} special characters or numbers into the Cardholder Name field.",
  (cardholdername) => {
    I.fillField("#ccName", cardholdername);
  }
);
Then("An error message Invalid Cardholder Name is displayed", async () => {
  checkoutForm.submitBox();
  I.wait(5);
  const colorValue = await I.grabCssPropertyFrom(
    "#checkoutForm > form > div.subsection.grid > section:nth-child(2) > div:nth-child(2) > shop-input > shop-md-decorator > label",
    "color"
  );
  console.log(colorValue);
  const hexColor = checkoutFormPP35.functionRgbToHex(colorValue);
  console.log(hexColor);
  assert.equal(hexColor, "#dd2c00");
});
