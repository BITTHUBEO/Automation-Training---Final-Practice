const { I } = inject();
const assert = require('assert');
module.exports = {
  //PP-80
  billingErrorMessage(){
    I.seeNumberOfVisibleElements('shop-md-decorator[error-message="Invalid Address"] label', 2);
    I.seeNumberOfVisibleElements('shop-md-decorator[error-message="Invalid City"] label', 2);
    I.seeNumberOfVisibleElements('shop-md-decorator[error-message="Invalid State/Province"] label', 2);
    I.seeNumberOfVisibleElements('shop-md-decorator[error-message="Invalid Zip/Postal Code"] label', 2);
  },
}