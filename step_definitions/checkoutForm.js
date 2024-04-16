const { I, menOuterwearPage, checkoutPage, checkoutForm  } = inject();
const assert = require('assert');

Given('I access the checkout form Page', () => {
    I.amOnPage('https://shop.polymer-project.org/')
    I.click('div:nth-child(2) > shop-button');
    I.wait(5);
    I.click('ul > li:nth-child(1) > a');
    I.click('#content > div > shop-button');
    I.wait(10);
    I.click('div:nth-child(3) > shop-button:nth-child(2)')
    });

    //PP-35
    When('Click on the Place Order button', () => {
        I.click('#submitBox')
      });
    Then ('The system displays error messages corresponding to each required field in the checkout form', () => {
        I.wait(10)
        checkoutForm.emailErrorMessage ();
        checkoutForm.phoneErrorMessage ();
        checkoutForm.cityErrorMessage ();
        checkoutForm.shipStateErrorMessage ();
        checkoutForm.shipZipErrorMessage();
        checkoutForm.errorMessageAccInfo();
        
      });

    //PP-80
    When('Select the option "Use Different Billing Address" in the checkbox', () => {
        I.click('#setBilling')
      });
    When('Click on Place order button', () => {
        I.click('#submitBox')
      });
    Then('The error messages of billing address are displayed due to these fields are required', () => {
        I.wait(10)
        checkoutForm.billingErrorMessage()
      });

    //PP-98
    When('Fill in all required and valid information in the checkout form.', () => {
      checkoutForm.fillAllValidInfo()
      });
    When('Click on the Place Order button.', () => {
        I.click('#submitBox')
      });
    Then('A confirmation message Thank you is displayed', () => {
        I.see('Thank you','h1');
      });
      
    //PP-36
    When('Enter the valid email address into the email field', () => {
        I.click('#submitBox');
        I.fillField('#accountEmail', 'bich@thu.com');
        });
    Then('The system accepts the input without displaying error message Invalid email', () => {
        I.click('#submitBox');
        I.dontSee('Invalid Email');        
        });

    //PP-43
    When('Enter the {string} address missing @ symbol into the email field.', (email) => {
        I.click('#submitBox');
        I.fillField('#accountEmail', email);
        });
    Then('An error message Invalid email is displayed indicating that the email address is invalid', () => {
        I.click('#submitBox');
        checkoutForm.emailErrorMessage ();
        });

    //PP-100
    When('Enter a {string} containing special characters into the phone number field.', (phonenumber) => {
        I.click('#submitBox');
        I.fillField('#accountPhone', phonenumber);
        });
    Then('An error message Invalid Phone Number is displayed', () => {
        I.click('#submitBox');
        checkoutForm.phoneErrorMessage ();
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
    //PP-52
    When('Enter city name wwith whitespace characters into the city field.', () => {
        I.click('#submitBox');
        I.fillField('#shipCity', '        ');
        I.wait(5)
        });
    Then('An error message Invalid City is displayed', () => {
        I.click('#submitBox');
        checkoutForm.cityErrorMessage ();
        });
    //PP-55
    When('Enter {string} special characters and numeric characters into the field.', (statename) => {
        I.click('#submitBox');
        I.fillField('#shipState', statename);
        I.wait(5)
        });
    Then('An error message Invalid State/Province is displayed.', () => {
        I.click('#submitBox');
        checkoutForm.shipStateErrorMessage ();
        });
    //PP-109
    When('Enter a {int} with a length below the required limit into the Zip/Postal Code field', (code) => {
      I.click('#submitBox');
      I.fillField('#shipZip', code);
      });
    Then('An error message Invalid Zip/Postal Code is displayed', () => {
      I.click('#submitBox');
      checkoutForm.shipZipErrorMessage();      
    });

