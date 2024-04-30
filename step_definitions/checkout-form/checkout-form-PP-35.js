const { I, checkoutForm } = inject();

Given('I access the checkout form Page', () => {
  checkoutForm.givenStep()
});
//PP-35
When('Click on the Place Order button', () => {
  checkoutForm.submitBox();
});
Then('The system displays error messages corresponding to each required field in the checkout form', () => {
  I.wait(10)
  checkoutForm.emailErrorMessage();
  checkoutForm.phoneErrorMessage();
  checkoutForm.cityErrorMessage();
  checkoutForm.shipStateErrorMessage();
  checkoutForm.shipZipErrorMessage();
  checkoutForm.cardholderNameErrorMessage();
  checkoutForm.cardNumberErrorMessage();
  checkoutForm.errorMessageAccInfo();
});