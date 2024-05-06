const { I, checkoutForm, checkoutFormPP36 } = inject();
const assert = require("assert");
Given("I access the checkout form Page", () => {
  checkoutForm.givenStep();
});
//PP-36
When("Enter the valid email address into the email field", () => {
  checkoutForm.submitBox();
  I.fillField("#accountEmail", "bich@thu.com");
});
Then(
  "The system accepts the input without displaying error message Invalid email",
  async () => {
    checkoutForm.submitBox();
    I.wait(5);
    const accEmailColorValue = await I.grabCssPropertyFrom(
      "#accountEmailLabel",
      "color"
    );
    console.log(accEmailColorValue);
    const hexColor = checkoutFormPP35.functionRgbToHex(accEmailColorValue);
    console.log(hexColor);
    assert.equal(hexColor, "#202020");
  }
);
