const { I, checkoutFormPP98 } = inject();
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
    //PP-98
    When('Fill in all required and valid information in the checkout form.', () => {
        checkoutFormPP98.fillAllValidInfo()
        });
      When('Click on the Place Order button.', () => {
          I.click('#submitBox')
        });
      Then('A confirmation message Thank you is displayed', () => {
          I.see('Thank you','h1');
        });