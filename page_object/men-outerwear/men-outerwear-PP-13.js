const { I } = inject();

module.exports = {
  // insert your locators and methods here

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
};

