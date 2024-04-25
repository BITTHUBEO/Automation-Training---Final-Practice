const { I } = inject();
const assert = require('assert');
module.exports = {
    menOuterwearPage: {
        url: 'https://shop.polymer-project.org/list/mens_outerwear'
    },
    productList: {
        xPath: '//html/body/shop-app//iron-pages/shop-list//ul/li[${i}]/a/shop-list-item'
    },
    detailProductPage :{
        link: 'https://shop.polymer-project.org/detail/mens_outerwear/Men+s+Tech+Shell+Full-Zip'
    },
    addToCartButton: {
        button: '#content > div > shop-button > button'
    },
    checkoutButton :{
        button: 'div:nth-child(3) > shop-button:nth-child(2)'
    },
  // insert your locators and methods here

  goToWebsite() {
    I.amOnPage(this.menOuterwearPage.url)
  },
  goToDetailProductPage() {
    I.amOnPage(this.detailProductPage.link)
  },

  async getNumberOfProduct() {
    return await I.grabNumberOfVisibleElements('this.productList.xPath');
  },
  //PP-13
  async verifyProductInformation() {
    const numberOfProducts = await this.getNumberOfProduct();
    for (let i = 1; i <= numberOfProducts; i++ ) {
      within('this.productList.xPath', () => {
      I.seeElement('#img');
      I.seeElement('.title');
      I.seeElement('.price')
    });
  }
},

//PP-17
  clickOnProduct() {
    I.wait(10);
    I.click('ul > li:nth-child(1) > a')
  },
  verifyProductDetailPage() {
    I.seeElement('h1');
    I.seeElement('#sizeLabel');
    I.seeElement('#quantityLabel');
    I.seeElement('.description');
    I.seeElement(this.addToCartButton.button)
  },



  //PP-21
  /*selectQuantity() {
    const quantity =5;
    I.selectOption('#quantitySelect', quantity);
  },
  selectSize() {
    const size = 'L';
    I.selectOption('#sizeSelect', size);
  },*/
  selectSize() {
    const size = ['XS','S', 'M','L','XL'];
    const randomSizeIndex = Math.floor(Math.random() * size.length);
    const randomSize = size[randomSizeIndex];
    I.selectOption('#sizeSelect', randomSize);
  },
  async selectQuantity () {
    const quantities = await I.grabTextFromAll('#quantitySelect option');
    const randomQuantityIndex = Math.floor(Math.random() * quantities.length);
    const randomQuantity = quantities[randomQuantityIndex];
    I.selectOption('#quantitySelect', randomQuantity);
    return randomQuantity;
  },
  clickAddToCartButton () {
    I.click(this.addToCartButton.button)
  },
  verifyConfirmationBox () {
    I.seeElement('shop-cart-modal');
    I.seeElement('#viewCartAnchor');
    I.seeElement('div:nth-child(3) > shop-button:nth-child(2) > a')
  },


  //PP-25
  verifyViewcartOption() {
    I.click('div:nth-child(3) > shop-button:nth-child(1)');
    I.seeInCurrentUrl('/cart');
  },
  clickCheckoutButton() {
    I.wait(5);
    I.click ('div > div:nth-child(2) > div.checkout-box > shop-button');
  },
  verifyCheckoutPage () {
    I.seeInCurrentUrl('/checkout')
    I.seeElement('#checkoutForm > form')
  },
  
  async getProductInfoInCart() {
    totalProductInCart = await I.grabNumberOfVisibleElements ('.name');
    totalProductInCartString = totalProductInCart.toString();
    totalPriceInCart = await I.grabTextFrom('.subtotal');
  },
  async getProductInfoCheckout() {
    totalProductInCheckout = await I.grabNumberOfVisibleElements('.flex');
    adjustedNumber = totalProductInCheckout - 1;
    totalProductInCheckoutString = adjustedNumber.toString();
    totalPriceInCheckout = await I.grabTextFrom('#checkoutForm > form > div.subsection.grid > section:nth-child(2) > div.row.total-row > div:nth-child(2)');
    return totalProductInCheckoutString;
  },
  compareProductInfo(){
    assert.strictEqual(totalProductInCheckoutString,totalProductInCartString,  'Total products in checkout form does not match with cart');
    assert.strictEqual(totalPriceInCheckout, totalPriceInCart, 'Total price in checkout form does not match with cart');
  },


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

