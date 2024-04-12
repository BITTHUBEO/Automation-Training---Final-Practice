const { I, menOuterwearPage, checkoutPage  } = inject();
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
        I.see ('Invalid Email','#checkoutForm > form > div.subsection.grid > section:nth-child(1) > div:nth-child(2) > shop-input > shop-md-decorator')
      });

