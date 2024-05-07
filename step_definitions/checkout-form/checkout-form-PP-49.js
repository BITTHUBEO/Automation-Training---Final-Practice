const { I, checkoutForm, checkoutFormPP35 } = inject();
const assert = require("assert");
Given("I access the checkout form Page", () => {
  checkoutForm.givenStep();
});
//PP-49
When(
  "Enter an address combination of alphanumeric characters into the field",
  () => {
    checkoutForm.submitBox();
    I.fillField("#shipAddressLabel", "123Xovietnghetinh");
  }
);

Then(
  "There are no error messages Invalid Phone Number is displayed.",
  async () => {
    checkoutForm.submitBox();
    I.wait(5);
    const addressColorValue = await I.grabCssPropertyFrom(
      "#shipAddressLabel",
      "color"
    );
    console.log(addressColorValue);
    const hexColor = checkoutFormPP35.functionRgbToHex(addressColorValue);
    console.log(hexColor);
    assert.equal(hexColor, "#202020");
  }
);
