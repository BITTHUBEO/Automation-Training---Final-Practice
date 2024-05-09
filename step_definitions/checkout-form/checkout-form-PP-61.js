const { I, checkoutForm } = inject();
const assert = require("assert");

Given("I access the checkout form Page", () => {
  checkoutForm.givenStep();
});
//PP-61
When("Check if any country is pre-selected.", () => {});
Then("The system should display the default country as United States.", () => {
  I.see("United States", "#shipCountry option[selected]");
});
