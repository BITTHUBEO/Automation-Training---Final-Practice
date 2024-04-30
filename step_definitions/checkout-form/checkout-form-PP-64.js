const { I, checkoutForm } = inject();


Given('I access the checkout form Page', () => {
    checkoutForm.givenStep()
});
//PP-64
When('Enter {string} special characters or numbers into the Cardholder Name field.', (cardholdername) => {
    I.fillField('#ccName', cardholdername);
});
Then('An error message Invalid Cardholder Name is displayed', () => {
    checkoutForm.submitBox();
    I.wait(5)
    I.seeCssPropertiesOnElements('shop-input > input[aria-invalid="true"]:not(:valid) + shop-md-decorator::after', { 'display': 'block' });
});
