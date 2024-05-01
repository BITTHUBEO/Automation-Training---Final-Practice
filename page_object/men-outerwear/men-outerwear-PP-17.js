const { I } = inject();

module.exports = {
    addToCartButton: {
        button: '#content > div > shop-button > button'
    },
    // insert your locators and methods here
    async getNumberOfProduct() {
        return await I.grabNumberOfVisibleElements('this.productList.xPath');
    },
    //PP-17
    clickOnProduct() {
        I.wait(10);
        const randomIndex = Math.floor(Math.random() * 16) + 1;
        console.log('randomIndex', randomIndex);
        I.click(`ul > li:nth-child(${randomIndex})`);
    },
    verifyProductDetailPage() {
        I.seeElement('h1');
        I.seeElement('#sizeLabel');
        I.seeElement('#quantityLabel');
        I.seeElement('.description');
        I.seeElement(this.addToCartButton.button)
    },
};

