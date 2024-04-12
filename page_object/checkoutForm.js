const { I } = inject();
const assert = require('assert');
module.exports = {




  // insert your locators and methods here
  preConditionToFillCheckoutForm() {
    I.click('div:nth-child(2) > shop-button');
    I.wait(5);
    I.click('ul > li:nth-child(1) > a');
    I.click('#content > div > shop-button');
    I.wait(20);
    I.click('div:nth-child(3) > shop-button:nth-child(2)')
  },
}