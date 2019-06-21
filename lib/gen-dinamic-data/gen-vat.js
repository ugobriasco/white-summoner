const { randomNumber } = require("./gen-random-var");

function genVat(countryCode) {
  const key = countryCode.toUpperCase();

  // Source:
  //https://en.wikipedia.org/wiki/VAT_identification_number

  const vatList = {
    AR: `${randomNumber(11)}`,
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
    CA: `ABCDEFGHI`,
    CH: `${randomNumber(9)}`,
    CL: `${randomNumber(8)}-0`,
    CN: undefined,
    CO: `${randomNumber(9)}-A`,
    CR: `${randomNumber(9)}`,
    CY: `CY${randomNumber(8)}L`,
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
    IL: `${randomNumber(9)}`,
    IN: `${randomNumber(11)}V`,
    IR: undefined,
    IT: `IT${randomNumber(11)}`,
    JP: `070${randomNumber(8)}`,
    LT: `${randomNumber(11)}`,
    LV: `${randomNumber(9)}`,
    LU: `${randomNumber(8)}`,
    KR: undefined,
    MA: undefined,
    MX: `AAGB860519G31`,
    NG: undefined,
    NL: `NL${randomNumber(9)}B${randomNumber(2)}`,
    NO: `${randomNumber(9)}MVA`,
    NP: undefined,
    NZ: `${randomNumber(13)}`,
    MT: `${randomNumber(8)}`,
    PK: undefined,
    PL: `${randomNumber(10)}`,
    PT: `${randomNumber(9)}`,
    RO: `RO${randomNumber(8)}`,
    RU: `${randomNumber(12)}`,
    SA: undefined,
    SI: `SI${randomNumber(8)}`,
    SK: `${randomNumber(10)}`,
    SL: `${randomNumber(8)}`,
    SE: `${randomNumber(12)}`,
    TR: `${randomNumber(10)}`,
    UA: `${randomNumber(10)}`,
    US: undefined,
    VN: undefined
  };

  if (vatList[key] === undefined) return "";
  return `${vatList[key]}`;
}

module.exports = { genVat };
