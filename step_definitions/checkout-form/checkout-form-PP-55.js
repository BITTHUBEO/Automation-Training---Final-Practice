const { I, checkoutForm, checkoutFormPP35 } = inject();
const assert = require("assert");

Given("I access the checkout form Page", () => {
  checkoutForm.givenStep();
});
//PP-55
When(
  "Enter {string} special characters and numeric characters into the field.",
  (statename) => {
    checkoutForm.submitBox();
    I.fillField("#shipState", statename);
  }
);
Then("An error message Invalid State Province is displayed.", async () => {
  checkoutForm.submitBox();
  I.wait(5);
  const shipStateColorValue = await I.grabCssPropertyFrom(
    "#shipStateLabel",
    "color"
  );
  console.log(shipStateColorValue);
  const hexColor = checkoutFormPP35.functionRgbToHex(shipStateColorValue);
  console.log(hexColor);
  assert.equal(hexColor, "#dd2c00");
});
