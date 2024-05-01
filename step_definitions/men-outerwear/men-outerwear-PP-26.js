const { I, menOuterwearPagePP13, menOuterwearPagePP26, } = inject();
const assert = require('assert');


Given('I open Men\'s Outerwear Page', () => {
  menOuterwearPagePP13.goToWebsite();
  });
  
  //PP-26
  let productName
  let productPrice
  let checkoutProductName
  let checkoutProductPrice
  let productQuantity
  When('The user clicks on the Checkout button in the notification popup', async () => {
    menOuterwearPage.clickOnProduct();
    menOuterwearPage.goToDetailProductPage();
    I.wait(5);
    menOuterwearPage.clickAddToCartButton();
    productName = await I.grabTextFrom ('h1');
    productPriceText = await I.grabTextFrom('.price');
    productPrice = parseFloat(productPriceText.replace('$', ''));
    productQuantity = 1;
    menOuterwearPagePP26.clickCheckoutOption();
  })
  Then('The product just added to cart is displayed on the order summary section of the checkout form', async () => {
    I.wait(5)
    menOuterwearPage.verifyCheckoutPage ();
    checkoutProductName = await I.grabTextFrom ('#checkoutForm > form > div.subsection.grid > section:nth-child(2) > div.row.order-summary-row > div.flex');
    checkoutProductPriceText = await I.grabTextFrom('#checkoutForm > form > div.subsection.grid > section:nth-child(2) > div.row.order-summary-row > div:nth-child(2)')
    checkoutProductPrice = parseFloat(checkoutProductPriceText.replace('$', ''));
    assert.strictEqual(productName, checkoutProductName,'Product name does not match');
    assert.strictEqual(productPrice * productQuantity, checkoutProductPrice, 'Price does not match')
  });

  
  
  
  