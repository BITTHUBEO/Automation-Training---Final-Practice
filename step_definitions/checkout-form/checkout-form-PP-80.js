const { I, checkoutFormPP80 } = inject();
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
    //PP-80
    When('Select the option "Use Different Billing Address" in the checkbox', () => {
        I.click('#setBilling')
      });
    When('Click on Place order button', () => {
        I.click('#submitBox')
      });
    Then('The error messages of billing address are displayed due to these fields are required', () => {
        I.wait(10)
        checkoutFormPP80.billingErrorMessage()
      });