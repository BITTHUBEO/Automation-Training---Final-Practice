const { I, checkoutForm } = inject();


Given('I access the checkout form Page', () => {
    checkoutForm.givenStep()
});
//PP-43
When('Enter the {string} address missing @ symbol into the email field.', (email) => {
    checkoutForm.submitBox();
    I.fillField('#accountEmail', email);
});
Then('An error message Invalid email is displayed indicating that the email address is invalid', () => {
    checkoutForm.submitBox();
    checkoutForm.emailErrorMessage();
});

