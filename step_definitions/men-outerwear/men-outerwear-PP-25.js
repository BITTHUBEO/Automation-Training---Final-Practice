const { I, menOuterwearPagePP13, menOuterwearPagePP25,  menOuterwearPagePP17, menOuterwearPagePP21} = inject();
const assert = require('assert');


Given('I open Men\'s Outerwear Page', () => {
    menOuterwearPagePP13.goToWebsite();
  });
  
  //PP-25
  let totalProductInCart;
  let totalPriceInCart;
  let totalProductInCheckout;
  let totalPriceInCheckout;
  let adjustedNumber ;
  let totalProductInCartString;

  When('The user clicks on the View Cart button in the notification popup', async () => {
    menOuterwearPagePP17.clickOnProduct();
    menOuterwearPagePP21.selectQuantity();
    menOuterwearPagePP21.selectSize();
    menOuterwearPagePP21.clickAddToCartButton();
    /*I.wait(10) Select more products
    I.click('.back-btn');
    menOuterwearPage.clickOnProduct();
    menOuterwearPage.clickAddToCartButton();*/
    menOuterwearPagePP25.verifyViewcartOption();
    menOuterwearPagePP25.getProductInfoInCart();
  })
  When('Click the Checkout button to proceed with the checkout process',  () => {
    menOuterwearPagePP25.clickCheckoutButton();
  })  
  Then('Users will be redirected to the payment page with an order information form to complete the purchasing process.', async() => {
    menOuterwearPagePP25.verifyCheckoutPage ();
    menOuterwearPagePP25.getProductInfoCheckoutAndCompare();
  });