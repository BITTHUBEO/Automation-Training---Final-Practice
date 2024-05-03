const { I } = inject();
const assert = require("assert");
module.exports = {
  menOuterwearPage: {
    url: "https://shop.polymer-project.org/list/mens_outerwear",
  },
  checkoutButton: {
    button: "div:nth-child(3) > shop-button:nth-child(2)",
  },
  // insert your locators and methods here

  //PP-26
  clickCheckoutOption() {
    I.click(this.checkoutButton.button);
  },
  async getProductInfo() {
    productName = await I.grabTextFrom("h1");
    productPriceText = await I.grabTextFrom(".price");
    productPrice = parseFloat(productPriceText.replace("$", ""));
    productQuantity = 1;
  },
  async getProductInfoInOrderAndCompare() {
    checkoutProductName = await I.grabTextFrom(
      "#checkoutForm > form > div.subsection.grid > section:nth-child(2) > div:nth-child(6) > div.flex"
    );
    checkoutProductPriceText = await I.grabTextFrom(
      "#checkoutForm > form > div.subsection.grid > section:nth-child(2) > div:nth-child(6) > div:nth-child(2)"
    );
    checkoutProductPrice = parseFloat(
      checkoutProductPriceText.replace("$", "")
    );
    assert.strictEqual(
      productName,
      checkoutProductName,
      "Product name does not match"
    );
    assert.strictEqual(
      productPrice * productQuantity,
      checkoutProductPrice,
      "Price does not match"
    );
  },
};
