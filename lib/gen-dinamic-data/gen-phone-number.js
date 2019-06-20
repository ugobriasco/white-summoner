const { countries } = require("../../data");
const { randomNumber } = require("../../util/random-number");

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

  //todo use ./get-mobile-phone

  const mobileNumberList = {
    AR: `911 ${randomNumber(8)}`,
    AM: `55${randomNumber(6)}`,
    AT: `650${randomNumber(7)}`,
    AU: `4${randomNumber(8)}`,
    AZ: `40${randomNumber(7)}`,
    BA: `60${randomNumber(8)}`,
    BD: `11${randomNumber(8)}`,
    BE: `456${randomNumber(6)}`,
    BR: `119${randomNumber(8)}`,
    BG: `88${randomNumber(7)}`,
    BZ: `6${randomNumber(5)}`,
    CA: `${randomNumber(10)}`,
    CH: `767${randomNumber(6)}`,
    CL: `9${randomNumber(8)}`,
    CN: `13${randomNumber(9)}`,
    CO: `310${randomNumber(7)}`,
    CR: `6${randomNumber(7)}`,
    CY: `94${randomNumber(6)}`,
    CZ: `601${randomNumber(6)}`,
    DE: `160${randomNumber(7)}`,
    DK: `50${randomNumber(6)}`,
    EE: `5${randomNumber(6)}`,
    EG: `10${randomNumber(8)}`,
    ES: `6${randomNumber(8)}`,
    FI: `457${randomNumber(7)}`,
    FR: `6${randomNumber(8)}`,
    GE: `551${randomNumber(6)}`,
    GB: `7700${randomNumber(6)}`,
    GR: `690${randomNumber(7)}`,
    HU: `30${randomNumber(7)}`,
    IE: `85${randomNumber(7)}`,
    IL: `6${randomNumber(7)}`,
    IN: `92${randomNumber(8)}`,
    IR: `990${randomNumber(7)}`,
    IT: `347${randomNumber(7)}`,
    JP: `070${randomNumber(8)}`,
    LT: `6${randomNumber(7)}`,
    LV: `2${randomNumber(7)}`,
    LU: `621${randomNumber(6)}`,
    KR: `10${randomNumber(7)}`,
    MA: `6${randomNumber(7)}`,
    MX: `1${randomNumber(9)}`,
    NG: `804${randomNumber(5)}`,
    NL: `61${randomNumber(7)}`,
    NO: `4${randomNumber(7)}`,
    NP: `98${randomNumber(8)}`,
    NZ: `25${randomNumber(7)}`,
    MT: `77${randomNumber(6)}`,
    PK: `30${randomNumber(8)}`,
    PL: `604${randomNumber(6)}`,
    PT: `91${randomNumber(7)}`,
    RO: `711${randomNumber(6)}`,
    RU: `901${randomNumber(7)}`,
    SA: `710${randomNumber(6)}`,
    SI: `20${randomNumber(7)}`,
    SK: `901${randomNumber(6)}`,
    SL: `23${randomNumber(7)}`,
    SE: `70${randomNumber(5)}`,
    TR: `50${randomNumber(7)}`,
    UA: `39${randomNumber(7)}`,
    US: `340${randomNumber(7)}`,
    VN: `3${randomNumber(8)}`
  };

  if (mobileNumberList[key] === undefined) return diallingCode || "";

  return `${diallingCode}${mobileNumberList[key]}`;
}

module.exports = { genPhoneNumber };
