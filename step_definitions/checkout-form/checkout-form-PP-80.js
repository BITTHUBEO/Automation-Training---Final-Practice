const { I, checkoutFormPP80, checkoutForm } = inject();

Given("I access the checkout form Page", () => {
  checkoutForm.givenStep();
});
//PP-80
When(
  'Select the option "Use Different Billing Address" in the checkbox',
  () => {
    I.click("#setBilling");
  }
);
When("Click on Place order button", () => {
  checkoutForm.submitBox();
});
Then(
  "The error messages of billing address are displayed due to these fields are required",
  () => {
    I.wait(10);
    checkoutFormPP80.billAddress();
    checkoutFormPP80.billCity();
    checkoutFormPP80.billState();
    checkoutFormPP80.billZip();
  }

);
