const { countries } = require("../data");
const { randomNumber } = require("../util/random-number");

function _getDiallingCode(nat) {
  const countryArr = countries.filter(
    country => country.country_code === nat.toUpperCase()
  );

  if (countryArr.length === 0) return "+00";

  return countryArr[0].dialling_code;
}

function getNumber(digits) {
  var num = Math.floor(
    Math.pow(10, digits - 1) + Math.random() * 9 * Math.pow(10, digits - 1)
  );
  return num.toString();
}

function genPhoneNumber(countryCode) {
  const diallingCode = _getDiallingCode(countryCode);
  const key = countryCode.toUpperCase();

  const mobileNumberList = {
    AT: `${randomNumber(11)}`,
    BE: `${randomNumber(9)}`,
    BR: `119${randomNumber(8)}`,
    BG: `${randomNumber(9)}`,
    CL: `${randomNumber(8)}`,
    CY: `${randomNumber(7)}`,
    CZ: `${randomNumber(9)}`,
    DK: `${randomNumber(8)}`,
    EE: `${randomNumber(7)}`,
    FI: `${randomNumber(7)}`,
    FR: `${randomNumber(9)}`,
    DE: `160${randomNumber(7)}`,
    GR: `${randomNumber(10)}`,
    HU: `${randomNumber(9)}`,
    IE: `${randomNumber(9)}`,
    IT: `347${randomNumber(7)}`,
    LT: `${randomNumber(9)}`,
    LV: `${randomNumber(8)}`,
    LU: `${randomNumber(9)}`,
    MT: `${randomNumber(8)}`,
    NO: `${randomNumber(8)}`,
    PL: `604${randomNumber(6)}`,
    PT: `${randomNumber(9)}`,
    SK: `${randomNumber(9)}`,
    SL: `${randomNumber(9)}`,
    ES: `${randomNumber(9)}`,
    SE: `${randomNumber(7)}`,
    CH: `767${randomNumber(6)}`,
    NL: `61${randomNumber(7)}`,
    GB: `7700${randomNumber(6)}`,
    US: `${randomNumber(10)}`,
    CA: `${randomNumber(10)}`
  };

  if (mobileNumberList[key] === undefined) return diallingCode || "";

  return `${diallingCode}${mobileNumberList[key]}`;
}

module.exports = { genPhoneNumber };
