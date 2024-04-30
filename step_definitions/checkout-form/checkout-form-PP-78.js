const { I, checkoutForm } = inject();


Given('I access the checkout form Page', () => {
    checkoutForm.givenStep()
});
//PP-78
When('Select an expiry date that has already passed from the dropdown.', () => {
    I.selectOption('#ccExpMonth', 'Jan');
    I.selectOption('#ccExpYear', '2017');
});
Then('An error message Invalid Expiry is displayed', () => {
    checkoutForm.submitBox();
    I.wait(5)
    I.see('Invalid Expiry Year', '#ccExpYear')
});
