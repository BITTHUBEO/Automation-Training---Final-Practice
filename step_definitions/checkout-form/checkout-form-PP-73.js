const { I, checkoutForm } = inject();


Given('I access the checkout form Page', () => {
    checkoutForm.givenStep()
});
//PP-73
When('Enter {string} with special characters or letters into the CVV field.', (cvv) => {
    I.fillField('#ccCVV', cvv);
});
Then('The error message Invalid CVV is displayed', () => {
    checkoutForm.submitBox();
    I.wait(5)
    checkoutForm.cvvErrorMessage();
});
