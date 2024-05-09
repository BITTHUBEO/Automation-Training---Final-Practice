const { I, checkoutForm, checkoutFormPP35 } = inject();
const assert = require("assert");

Given("I access the checkout form Page", () => {
  checkoutForm.givenStep();
});
//PP-78
When("Select an expiry date that has already passed from the dropdown.", () => {
  I.selectOption("#ccExpMonth", "Jan");
  I.selectOption("#ccExpYear", "2017");
});
Then("An error message Invalid Expiry is displayed", async () => {
  checkoutForm.submitBox();
  I.wait(5);
  const expColorValue = await I.grabCssPropertyFrom(
    "#checkoutForm > form > div.subsection.grid > section:nth-child(2) > div:nth-child(4) > div > label",
    "color"
  );
  console.log(expColorValue);
  const hexColor = checkoutFormPP35.functionRgbToHex(expColorValue);
  console.log(hexColor);
  assert.equal(hexColor, "#dd2c00");
});
