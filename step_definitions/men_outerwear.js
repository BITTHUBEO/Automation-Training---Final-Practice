const { I, menOuterwearPage  } = inject();
const assert = require('assert');


Given('I open Men\'s Outerwear Page', () => {
  menOuterwearPage.goToWebsite();
  });
  
  //PP-13
When('User verifies the information for each product', () => {
  });
Then('The total number of products on the page is displayed', () => {
  I.see('(16 items)', 'span');
  });
Then ('All products displayed on the page include image, product names and prices', async () => {
  menOuterwearPage.getNumberOfProduct();
  menOuterwearPage.verifyProductInformation();
  });

  //PP-17
When('User clicks on the product to view its details',  () => {
  menOuterwearPage.clickOnProduct();
})
Then('The product detail page should include product name, description, price, size, quantity, and buttons to add the product to the cart', () => {
  I.wait(10);
  menOuterwearPage.goToDetailProductPage();
  menOuterwearPage.verifyProductDetailPage();
});


  //PP-21
  When('User selects the quantity of the product to purchase.', async () => {
    menOuterwearPage.clickOnProduct();
    menOuterwearPage.goToDetailProductPage();
    I.wait(10);
    menOuterwearPage.selectQuantity();
  })
  When('User selects the size of product', async () => {
    menOuterwearPage.selectSize();
  })  
  When('User clicks on the Add to Cart button.', async () => {
    menOuterwearPage.clickAddToCartButton();
  })
  Then('Confirmation dialog box displayed to notify that the product has been "Added to cart", with 2 options "view cart" and "checkout" for the user to perform the next action of shopping', () => {
    I.wait(10);
    menOuterwearPage.verifyConfirmationBox();
  });
  
  //PP-25
  let totalProductInCart;
  let totalPriceInCart;
  let totalProductInCheckout;
  let totalPriceInCheckout;
  let adjustedNumber ;
  let totalProductInCartString;
  When('The user clicks on the View Cart button in the notification popup', async () => {
    menOuterwearPage.clickOnProduct();
    menOuterwearPage.goToDetailProductPage();
    menOuterwearPage.selectQuantity();
    menOuterwearPage.selectSize();
    menOuterwearPage.clickAddToCartButton();
    /*I.wait(10) Select more products
    I.click('.back-btn');
    menOuterwearPage.clickOnProduct();
    menOuterwearPage.clickAddToCartButton();*/
    menOuterwearPage.verifyViewcartOption();
    totalProductInCart = await I.grabNumberOfVisibleElements ('.name');
    totalProductInCartString = totalProductInCart.toString();
    totalPriceInCart = await I.grabTextFrom('.subtotal');
  })
  When('Click the Checkout button to proceed with the checkout process',  () => {
    menOuterwearPage.clickCheckoutButton();
  })  
  Then('Users will be redirected to the payment page with an order information form to complete the purchasing process.', async() => {
    menOuterwearPage.verifyCheckoutPage ();
    totalProductInCheckout = await I.grabNumberOfVisibleElements('.flex');
    adjustedNumber = totalProductInCheckout - 1;
    totalProductInCheckoutString = adjustedNumber.toString();
    totalPriceInCheckout = await I.grabTextFrom('#checkoutForm > form > div.subsection.grid > section:nth-child(2) > div.row.total-row > div:nth-child(2)');
    I.wait(5);
    assert.strictEqual(totalProductInCheckoutString,totalProductInCartString,  'Total products in checkout form does not match with cart');
    assert.strictEqual(totalPriceInCheckout, totalPriceInCart, 'Total price in checkout form does not match with cart');
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
    menOuterwearPage.clickCheckoutOption();
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

  //PP-111


  
  
  
  