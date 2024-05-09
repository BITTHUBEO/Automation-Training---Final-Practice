const { I, menOuterwearPagePP13, menOuterwearPagePP21, menOuterwearPagePP17 } =
  inject();
const assert = require("assert");

Given("I open Men's Outerwear Page", () => {
  menOuterwearPagePP13.goToWebsite();
});
//PP-116
When("User click X button on the top-right corner of the box", () => {
  menOuterwearPagePP17.clickOnProduct();
  menOuterwearPagePP21.clickAddToCartButton();
  I.click("#icon");
});
Then("The dialog box is closed", () => {
  const classValue = I.grabAttributeFrom("shop-cart-modal", "class");
  assert.notEqual(classValue, "opened");
});
