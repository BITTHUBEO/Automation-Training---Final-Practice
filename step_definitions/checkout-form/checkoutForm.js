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
        });
    Then('An error message Invalid State Province is displayed.', () => {
        I.click('#submitBox');
        I.wait(5);
        I.see('Invalid State/Province')
        });
    //PP-109
    When('Enter a {int} with a length below the required limit into the Zip Postal Code field', (code) => {
      I.click('#submitBox');
      I.fillField('#shipZip', code);
      });
    Then('An error message Invalid Zip Postal Code is displayed', () => {
      I.click('#submitBox');
      I.see('Invalid Zip/Postal Code') 
      I.wait(5)     
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


