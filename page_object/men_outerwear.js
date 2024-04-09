const { I } = inject();

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
  selectQuantity() {
    const quantity =5;
    I.selectOption('#quantitySelect', quantity);
  },
  selectSize() {
    const size = 'L';
    I.selectOption('#sizeSelect', size);
  },
  clickAddToCartButton () {
    I.click(this.addToCartButton.button)
  },
  verifyConfirmationBox () {
    I.seeElement('shop-cart-modal');
    I.seeElement('#viewCartAnchor');
    I.seeElement('div:nth-child(3) > shop-button:nth-child(2) > a')
  }

};

