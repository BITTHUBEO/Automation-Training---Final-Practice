const { I, checkoutForm } = inject();


Given('I access the checkout form Page', () => {
    checkoutForm.givenStep()
});
//PP-64
When('Enter {string} special characters or numbers into the Cardholder Name field.', (cardholdername) => {
    I.fillField('#ccName', cardholdername);
});
Then('An error message Invalid Cardholder Name is displayed', async () => {
    checkoutForm.submitBox();
    I.wait(5);
    //const displayValue = await I.grabCssPropertyFrom('shop-select > shop-md-decorator', 'display');
    I.seeCssPropertiesOnElements('shop-select > shop-md-decorator::after', { 'display': "block"});

});
