const { I, menOuterwearPagePP13, menOuterwearPagePP17 } = inject();
const { devices } = require("playwright");

Given("I open Men's Outerwear Page", () => {
  menOuterwearPagePP13.goToWebsite();
});
//PP-17
When("User clicks on the product to view its details", () => {
  menOuterwearPagePP17.clickOnProduct();
});
Then(
  "The total number of products on the page is displayed and The product detail page should include product name, description, price, size, quantity, and buttons to add the product to the cart",
  () => {
    I.wait(10);
    menOuterwearPagePP17.verifyProductDetailPage();
  }
);
