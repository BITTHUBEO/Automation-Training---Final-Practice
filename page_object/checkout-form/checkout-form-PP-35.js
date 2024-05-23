const { I } = inject();
const assert = require("assert");
module.exports = {
  //PP-35

  async addressErrorMessage() {
    const addColorValue = await I.grabAttributeFrom(
      "#shipAddress + shop-md-decorator",
      "error-message"
    );
    console.log("add: ", addColorValue);
  },
  async emailErrorMessage() {
    const mailColorValue = await I.grabAttributeFrom(
      "#accountEmail + shop-md-decorator",
      "error-message"
    );
    console.log("email: ", mailColorValue);
  },
  async phoneErrorMessage() {
    const phoneColorValue = await I.grabAttributeFrom(
      "#accountPhone + shop-md-decorator",
      "error-message"
    );
    console.log("phone: ", phoneColorValue);

  },
  async cityErrorMessage() {
    const cityColorValue = await I.grabAttributeFrom(
      "#shipCity + shop-md-decorator",
      "error-message"
    );
    console.log("city: ", cityColorValue);

  },
  async shipStateErrorMessage() {
    const stateColorValue = await I.grabAttributeFrom(
      "#shipState + shop-md-decorator",
      "error-message"
    );
    console.log("state: ", stateColorValue);

  },
  async shipZipErrorMessage() {
    const zipColorValue = await I.grabAttributeFrom("#shipZip + shop-md-decorator", "error-message");
    console.log("zip: ", zipColorValue);

  },
  async cardholderNameErrorMessage() {
    const cardnameColorValue = await I.grabAttributeFrom(
      "#ccName + shop-md-decorator",
      "error-message"
    );
    console.log("cardname: ", cardnameColorValue);

  },
  async cardNumberErrorMessage() {
    const cardnumColorValue = await I.grabAttributeFrom(
      "#ccNumber + shop-md-decorator",
      "error-message"
    );
    console.log("cardnum: ", cardnumColorValue);

  },
  async cvvErrorMessage() {
    const cvvColorValue = await I.grabAttributeFrom(
      "#ccCVV + shop-md-decorator",
      "error-message"
    );
    console.log("cvv: ", cvvColorValue )

  },
  async expErrorMessage() {
    const expColorValue = await I.grabAttributeFrom(
      "#ccExpMonth + shop-md-decorator",
      "error-message"
    );

  },

  functionRgbToHex(rgb) {
    rgb = rgb
      .substring(4, rgb.length - 1)
      .replace(/ /g, "")
      .split(",");
    return (
      "#" +
      rgb
        .map((x) => {
          x = parseInt(x).toString(16);
          return x.length === 1 ? "0" + x : x;
        })
        .join("")
    );
  },
};
