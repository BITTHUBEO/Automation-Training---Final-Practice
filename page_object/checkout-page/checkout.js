const { I } = inject();
const assert = require("assert");
module.exports = {
  cartIcon: {
    selector:
      "#header > app-toolbar > div.cart-btn-container > a > paper-icon-button",
  },

  // insert your locators and methods here
  preConditionToViewCart() {
    I.click("div:nth-child(2) > shop-button");
    I.wait(5);
    I.click("ul > li:nth-child(1) > a");
    I.click("#content > div > shop-button");
    I.wait(20);
    I.click("#tabContainer > shop-tabs > shop-tab:nth-child(2)");
    I.wait(5);
    I.click("ul > li:nth-child(2)");
    I.click("#content > div > shop-button");
    I.wait(5);
  },
  clickCartIcon() {
    I.click(this.cartIcon.selector);
  },
};
