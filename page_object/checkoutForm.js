const { I } = inject();
const assert = require('assert');
module.exports = {




  // insert your locators and methods here
  preConditionToFillCheckoutForm() {
    I.click('div:nth-child(2) > shop-button');
    I.wait(5);
    I.click('ul > li:nth-child(1) > a');
    I.click('#content > div > shop-button');
    I.wait(20);
    I.click('div:nth-child(3) > shop-button:nth-child(2)')
  },
  //PP-35
  errorMessageAccInfo() {
    I.seeElement('shop-md-decorator[error-message="Invalid Address"] label');   
    I.seeElement('shop-md-decorator[error-message="Invalid City"] label');  
    I.seeElement('shop-md-decorator[error-message="Invalid State/Province"] label');  
    I.seeElement('shop-md-decorator[error-message="Invalid Zip/Postal Code"] label');  
    I.seeElement('shop-md-decorator[error-message="Invalid Cardholder Name"] label');  
    I.seeElement('shop-md-decorator[error-message="Invalid Card Number"] label');  
    I.seeElement('shop-md-decorator[error-message="Invalid CVV"] label');   
  },
  emailErrorMessage () {
    I.seeElement('shop-md-decorator[error-message="Invalid Email"] label');     
  },
  phoneErrorMessage () {
    I.seeElement('shop-md-decorator[error-message="Invalid Phone Number"] label');   
  },

  //PP-80
  billingErrorMessage(){
    I.seeNumberOfVisibleElements('shop-md-decorator[error-message="Invalid Address"] label', 2);
    I.seeNumberOfVisibleElements('shop-md-decorator[error-message="Invalid City"] label', 2);
    I.seeNumberOfVisibleElements('shop-md-decorator[error-message="Invalid State/Province"] label', 2);
    I.seeNumberOfVisibleElements('shop-md-decorator[error-message="Invalid Zip/Postal Code"] label', 2);
  },

//PP-98
  fillAllValidInfo(){
    I.fillField('#accountEmail', 'thibichthu141@gmail.com');
    I.fillField('#accountPhone', '0123842115');
    I.fillField('#shipAddress', '1254 Xo Viet NgheTinh');
    I.fillField('#shipCity', 'Da Nang');
    I.fillField('#shipState', 'Hai Chau');
    I.fillField('#shipZip', '550000');
    I.click('#setBilling')
    I.fillField('#billAddress', '10 Nui Thanh');
    I.fillField('#billCity', 'Da Nang');
    I.fillField('#billState', 'Ngu Hanh Son');
    I.fillField('#billZip', '550000');
    I.fillField('#ccName', 'THI THI BICH THU');
    I.fillField('#ccNumber', '085547982022365');
    I.fillField('#ccCVV', '1234');
  }
}