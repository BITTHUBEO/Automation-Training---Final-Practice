const { I, checkoutForm, checkoutFormPP35 } = inject();
const assert = require("assert");

Given("I access the checkout form Page", () => {
  checkoutForm.givenStep();
});
//PP-52
When("Enter city name wwith whitespace characters into the city field.", () => {
  checkoutForm.submitBox();
  I.fillField("#shipCity", "        ");
  I.wait(5);
});
Then("An error message Invalid City is displayed", async () => {
  checkoutForm.submitBox();
  checkoutForm.submitBox();
  I.wait(5);
  const shipCitycolorValue = await I.grabCssPropertyFrom(
    "#shipCityLabel",
    "color"
  );
  console.log(shipCitycolorValue);
  const hexColor = checkoutFormPP35.functionRgbToHex(shipCitycolorValue);
  console.log(hexColor);
  assert.equal(hexColor, "#dd2c00");
});
