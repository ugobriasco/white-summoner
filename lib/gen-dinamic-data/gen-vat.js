const countryList = require("../data/country-list");
const { randomNumber } = require("../util/random-number");

function genVat(countryCode) {
  const key = countryCode.toUpperCase();

  // Source:
  //https://en.wikipedia.org/wiki/VAT_identification_number

  const vatList = {
    AT: `ATU${randomNumber(8)}`,
    BE: `BE0${randomNumber(9)}`,
    BR: `${randomNumber(9)}-00`,
    BG: `BG${randomNumber(9)}`,
    CL: `${randomNumber(8)}-0`,
    CY: `CY${randomNumber(9)}`,
    CZ: `CZ${randomNumber(8)}`,
    DK: `DK${randomNumber(8)}`,
    EE: `${randomNumber(9)}`,
    FI: `FI${randomNumber(8)}`,
    FR: `FRXX${randomNumber(9)}`,
    DE: `DE2${randomNumber(8)}`,
    GR: `EL${randomNumber(9)}`,
    HU: `HU${randomNumber(8)}`,
    IE: `IE${randomNumber(7)}AA`,
    IT: `IT${randomNumber(11)}`,
    LT: `${randomNumber(11)}`,
    LV: `${randomNumber(9)}`,
    LU: `${randomNumber(8)}`,
    MT: `${randomNumber(8)}`,
    NL: `NL${randomNumber(9)}B${randomNumber(2)}`,
    NO: `${randomNumber(9)}MVA`,
    PL: `${randomNumber(10)}`,
    PT: `${randomNumber(9)}`,
    SK: `${randomNumber(10)}`,
    SL: `${randomNumber(8)}`,
    ES: `X${randomNumber(8)}`,
    SE: `${randomNumber(12)}`,
    CH: `${randomNumber(9)}`,
    GB: `${randomNumber(9)}`,
    US: ``,
    CA: ``
  };

  if (vatList[key] === undefined) return "";
  return `${vatList[key]}`;
}

module.exports = { genVat };
