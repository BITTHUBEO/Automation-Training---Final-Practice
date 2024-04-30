const { I, checkoutForm } = inject();


Given('I access the checkout form Page', () => {
    checkoutForm.givenStep()
});
//PP-71
When('Enter a {string} within the allowed limit digits but containing spaces into the Card Number field.', (cardnumber) => {
    I.fillField('#ccNumber', cardnumber);
});
Then('The error message Invalid Card Number displayed', () => {
    checkoutForm.submitBox();
    I.wait(5)
    checkoutForm.cardNumberErrorMessage();
});
