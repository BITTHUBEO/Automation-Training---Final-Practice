const { I, checkoutForm, checkoutFormPP35 } = inject();
const assert = require("assert");

Given("I access the checkout form Page", () => {
  checkoutForm.givenStep();
});
//PP-109
When(
  "Enter a {int} with a length below the required limit into the Zip Postal Code field",
  (code) => {
    checkoutForm.submitBox();
    I.fillField("#shipZip", code);
  }
);
Then("An error message Invalid Zip Postal Code is displayed", async () => {
  checkoutForm.submitBox();
  const shipZipColorValue = await I.grabCssPropertyFrom(
    "#shipZipLabel",
    "color"
  );
  console.log(shipZipColorValue);
  const hexColor = checkoutFormPP35.functionRgbToHex(shipZipColorValue);
  console.log(hexColor);
  assert.equal(hexColor, "#dd2c00");
  I.wait(5);
});
