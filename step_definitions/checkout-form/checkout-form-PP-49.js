const { I, menOuterwearPage, checkoutPage, checkoutForm  } = inject();

Given('I access the checkout form Page', () => {
    checkoutForm.givenStep()
    });
    //PP-49
    When('Enter an {string} combination of alphanumeric characters into the address field.', (address) => {
        I.click('#submitBox');
        I.fillField('#shipAddress', address);
        });
    Then('There are no error messages Invalid Phone Number is displayed.', () => {
        I.click('#submitBox');
        I.dontSee('Invalid Address')
        });