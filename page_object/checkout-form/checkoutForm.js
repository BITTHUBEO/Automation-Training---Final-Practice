const { I } = inject();
const assert = require("assert");
module.exports = {
  // insert your locators and methods here
  givenStep() {
    I.amOnPage("https://shop.polymer-project.org/");
    I.click("div:nth-child(2) > shop-button");
    I.wait(5);
    I.click("ul > li:nth-child(1) > a");
    I.click("#content > div > shop-button");
    I.wait(10);
    I.click("div:nth-child(3) > shop-button:nth-child(2)");
  },
  preConditionToFillCheckoutForm() {
    I.click("div:nth-child(2) > shop-button");
    I.wait(5);
    I.click("ul > li:nth-child(1) > a");
    I.click("#content > div > shop-button");
    I.wait(20);
    I.click("div:nth-child(3) > shop-button:nth-child(2)");
  },

  submitBox() {
    I.click("#submitBox");
  },
};
