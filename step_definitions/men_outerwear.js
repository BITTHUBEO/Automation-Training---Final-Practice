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
  When('User clicks on the "Add to Cart" button.', async () => {
    menOuterwearPage.clickAddToCartButton();
  })
  Then('Confirmation dialog box displayed to notify that the product has been "Added to cart", with 2 options "view cart" and "checkout" for the user to perform the next action of shopping', () => {
    I.wait(10);
    menOuterwearPage.verifyConfirmationBox();
  });
  



  