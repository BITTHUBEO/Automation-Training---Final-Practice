const { I } = inject();

module.exports = {
    menOuterwearPage: {
        url: 'https://shop.polymer-project.org/list/mens_outerwear'
    },
    // insert your locators and methods here
    goToWebsite() {
        I.amOnPage(this.menOuterwearPage.url)
    },
    async getNumberOfProduct() {
        return await I.grabNumberOfVisibleElements('this.productList.xPath');
    },
    //PP-13
    async verifyProductInformation() {
        const numberOfProducts = await this.getNumberOfProduct();
        for (let i = 1; i <= numberOfProducts; i++) {
            within('this.productList.xPath', () => {
                I.seeElement('#img');
                I.seeElement('.title');
                I.seeElement('.price')
            });
        }
    },
};

