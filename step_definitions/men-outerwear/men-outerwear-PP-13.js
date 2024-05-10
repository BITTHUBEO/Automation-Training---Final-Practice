const { I, menOuterwearPagePP13 } = inject();

Given("I open Men's Outerwear Page", () => {
  menOuterwearPagePP13.goToWebsite();
});
//PP-13
When("User verifies the information for each product", () => {});
Then(
  "The total number of products on the page is displayed and All products displayed on the page include image, product names and prices",
  async () => {
    I.see("(16 items)", "span");
    menOuterwearPagePP13.getNumberOfProduct();
    menOuterwearPagePP13.verifyProductInformation();
  }
);
