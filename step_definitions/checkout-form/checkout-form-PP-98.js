const { I, checkoutFormPP98, checkoutForm } = inject();
const assert = require("assert");

Given("I access the checkout form Page", () => {
  checkoutForm.givenStep();
});
//PP-98
When("Fill in all required and valid information in the checkout form.", () => {
  checkoutFormPP98.fillAllValidInfo();
});
When("Click on the Place Order button.", () => {
  checkoutForm.submitBox();
});
Then("A confirmation message Thank you is displayed", () => {
  I.see("Thank you", "h1");
  I.amOnPage("https://shop.polymer-project.org/checkout/success");
});
