const { I } = inject();
const assert = require("assert");
module.exports = {
  //PP-98
  fillAllValidInfo() {
    I.fillField("#accountEmail", "thibichthu141@gmail.com");
    I.fillField("#accountPhone", "0123842115");
    I.fillField("#shipAddress", "1254 Xo Viet NgheTinh");
    I.fillField("#shipCity", "Da Nang");
    I.fillField("#shipState", "Hai Chau");
    I.fillField("#shipZip", "550000");
    I.click("#setBilling");
    I.fillField("#billAddress", "10 Nui Thanh");
    I.fillField("#billCity", "Da Nang");
    I.fillField("#billState", "Ngu Hanh Son");
    I.fillField("#billZip", "550000");
    I.fillField("#ccName", "THI THI BICH THU");
    I.fillField("#ccNumber", "085547982022365");
    I.fillField("#ccCVV", "1234");
  },
};
