const { I, checkoutForm } = inject();

Given('I access the checkout form Page', () => {
    checkoutForm.givenStep()
    });
    //PP-36
    When('Enter the valid email address into the email field', () => {
        checkoutForm.submitBox();
        I.fillField('#accountEmail', 'bich@thu.com');
        });
    Then('The system accepts the input without displaying error message Invalid email', () => {
        checkoutForm.submitBox();
        I.dontSee('Invalid Email');        
        });