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
      //PP-

