const { I } = inject();
const assert = require('assert');
module.exports = {
    menOuterwearPage: {
        url: 'https://shop.polymer-project.org/list/mens_outerwear'
    },
    checkoutButton :{
        button: 'div:nth-child(3) > shop-button:nth-child(2)'
    },
  // insert your locators and methods here

  //PP-26
    clickCheckoutOption () {
      I.click (this.checkoutButton.button)
    },
    async getProductInfoToCheckout (){
      productName = await I.grabTextFrom ('h1');
      productPriceText = await I.grabTextFrom('.price');
      productPrice = parseFloat(productPriceText.replace('$', ''));
      productQuantity = 1;
    }
};

