const { I, checkoutForm } = inject();


Given('I access the checkout form Page', () => {
    checkoutForm.givenStep()
});
//PP-52
When('Enter city name wwith whitespace characters into the city field.', () => {
    checkoutForm.submitBox();
    I.fillField('#shipCity', '        ');
    I.wait(5)
});
Then('An error message Invalid City is displayed', () => {
    checkoutForm.submitBox();
    checkoutForm.cityErrorMessage();
});