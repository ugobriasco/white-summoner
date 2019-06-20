const { randomNumber } = require("../util/random-number");

function genVat(countryCode) {
  const key = countryCode.toUpperCase();

  // Source:
  //https://en.wikipedia.org/wiki/VAT_identification_number

  const vatList = {
    AR: undefined,
    AM: undefined,
    AT: `ATU${randomNumber(8)}`,
    AU: undefined,
    AZ: undefined,
    BA: undefined,
    BD: undefined,
    BE: `BE0${randomNumber(9)}`,
    BR: `${randomNumber(9)}-00`,
    BG: `BG${randomNumber(9)}`,
    BZ: undefined,
    CA: undefined,
    CH: `${randomNumber(9)}`,
    CL: `${randomNumber(8)}-0`,
    CN: undefined,
    CO: undefined,
    CR: undefined,
    CY: `CY${randomNumber(9)}`,
    CZ: `CZ${randomNumber(8)}`,
    DE: `DE2${randomNumber(8)}`,
    DK: `DK${randomNumber(8)}`,
    EE: `${randomNumber(9)}`,
    EG: `10${randomNumber(8)}`,
    ES: `X${randomNumber(8)}`,
    FI: `FI${randomNumber(8)}`,
    FR: `FRXX${randomNumber(9)}`,
    GE: undefined,
    GB: `${randomNumber(9)}`,
    GR: `EL${randomNumber(9)}`,
    HU: `HU${randomNumber(8)}`,
    IE: `IE${randomNumber(7)}AA`,
    IL: undefined,
    IN: undefined,
    IR: undefined,
    IT: `IT${randomNumber(11)}`,
    JP: `070${randomNumber(8)}`,
    LT: `${randomNumber(11)}`,
    LV: `${randomNumber(9)}`,
    LU: `${randomNumber(8)}`,
    KR: undefined,
    MA: undefined,
    MX: undefined,
    NG: undefined,
    NL: `NL${randomNumber(9)}B${randomNumber(2)}`,
    NO: `${randomNumber(9)}MVA`,
    NP: undefined,
    NZ: undefined,
    MT: `${randomNumber(8)}`,
    PK: undefined,
    PL: `${randomNumber(10)}`,
    PT: `${randomNumber(9)}`,
    RO: undefined,
    RU: undefined,
    SA: undefined,
    SI: undefined,
    SK: `${randomNumber(10)}`,
    SL: `${randomNumber(8)}`,
    SE: `${randomNumber(12)}`,
    TR: undefined,
    UA: undefined,
    US: undefined,
    VN: undefined
  };

  if (vatList[key] === undefined) return "";
  return `${vatList[key]}`;
}

module.exports = { genVat };
