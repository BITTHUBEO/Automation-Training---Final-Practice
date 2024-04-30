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


    //PP-61
    When('Check if any country is pre-selected.', () => {

      });
    Then('The system should display the default country as United States.', () => {
      I.see('United States', '#shipCountry option[selected]')
      });
    //PP-64
    When('Enter {string} special characters or numbers into the Cardholder Name field.', (cardholdername) => {
      I.fillField('#ccName', cardholdername);
      });
    Then('An error message Invalid Cardholder Name is displayed', () => {
      I.click('#submitBox');
      I.wait(5)
      I.seeCssPropertiesOnElements('shop-input > input[aria-invalid="true"]:not(:valid) + shop-md-decorator::after', {'display': 'block'});
    });
     //PP-71
    When('Enter a {string} within the allowed limit digits but containing spaces into the Card Number field.', (cardnumber) => {
      I.fillField('#ccNumber', cardnumber);
      });
    Then('The error message Invalid Card Number displayed', () => {
      I.click('#submitBox');
      I.wait(5)
      checkoutForm.cardNumberErrorMessage();      
    });
     //PP-73
    When('Enter {string} with special characters or letters into the CVV field.', (cvv) => {
      I.fillField('#ccCVV', cvv);
      });
    Then('The error message Invalid CVV is displayed', () => {
      I.click('#submitBox');
      I.wait(5)
      checkoutForm.cvvErrorMessage();      
    });

    //PP-78
    When('Select an expiry date that has already passed from the dropdown.', () => {
      I.selectOption('#ccExpMonth','Jan');
      I.selectOption('#ccExpYear','2017');
      });
    Then('An error message Invalid Expiry is displayed', () => {
      I.click('#submitBox');
      I.wait(5)
      I.see('Invalid Expiry Year','#ccExpYear')   
    });


