const { I } = inject();

module.exports = {
    addToCartButton: {
        button: '#content > div > shop-button > button'
    },
    // insert your locators and methods here
    async getNumberOfProduct() {
        return await I.grabNumberOfVisibleElements('this.productList.xPath');
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
        const size = ['XS', 'S', 'M', 'L', 'XL'];
        const randomSizeIndex = Math.floor(Math.random() * size.length);
        const randomSize = size[randomSizeIndex];
        I.selectOption('#sizeSelect', randomSize);
    },
    async selectQuantity() {
        const quantities = await I.grabTextFromAll('#quantitySelect option');
        const randomQuantityIndex = Math.floor(Math.random() * quantities.length);
        const randomQuantity = quantities[randomQuantityIndex];
        I.selectOption('#quantitySelect', randomQuantity);
        return randomQuantity;
    },
    clickAddToCartButton() {
        I.click(this.addToCartButton.button)
    },
    verifyConfirmationBox() {
        I.seeElement('shop-cart-modal');
        I.seeElement('#viewCartAnchor');
        I.seeElement('div:nth-child(3) > shop-button:nth-child(2) > a')
    },
};

