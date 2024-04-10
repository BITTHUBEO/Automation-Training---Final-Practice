const { I, menOuterwearPage  } = inject();


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

  When('The user clicks on the View Cart button in the notification popup',  () => {
    menOuterwearPage.clickOnProduct();
    menOuterwearPage.goToDetailProductPage();
    I.wait(5);
    menOuterwearPage.selectQuantity();
    menOuterwearPage.selectSize();
    menOuterwearPage.clickAddToCartButton();
    menOuterwearPage.verifyViewcartOption();
  })
  When('Click the Checkout button to proceed with the checkout process',  () => {
    menOuterwearPage.clickCheckoutButton();
  })  
  Then('Users will be redirected to the payment page with an order information form to complete the purchasing process.', () => {
    menOuterwearPage.verifyCheckoutPage ();
  });
  
  //PP-26
  When('The user clicks on the Checkout button in the notification popup',  () => {
    menOuterwearPage.clickOnProduct();
    menOuterwearPage.goToDetailProductPage();
    I.wait(5);
    menOuterwearPage.selectQuantity();
    menOuterwearPage.selectSize();
    menOuterwearPage.clickAddToCartButton();
    menOuterwearPage.clickCheckoutOption();
  })
  Then('Users will be redirected to the checkout page with an order information form to complete the purchasing process.', () => {
    I.wait(5)
    menOuterwearPage.verifyCheckoutPage ();
  });

  //PP-111
  let productName 
  When('Verify the product name before adding product to cart', async () => {
    menOuterwearPage.clickOnProduct();
    menOuterwearPage.goToDetailProductPage();
    I.wait(5);
    productName = await I.grabTextFrom('h1');
    menOuterwearPage.clickAddToCartButton();
    I.click('#icon');
    I.click('ul > li:nth-child(2)')
    menOuterwearPage.clickAddToCartButton();
    menOuterwearPage.clickCheckoutOption();
  })
  Then('The checkout form displays only the information about the product being purchased.', async () => {
    I.wait(5)
    I.amOnPage('https://shop.polymer-project.org/checkout')
    I.see(productName);
    I.seeNumberOfVisibleElements('.flex', 1, );
  });

  
  