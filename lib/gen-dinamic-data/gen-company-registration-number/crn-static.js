const data = {
  AT: ``,
  BE: ``,
  BR: `000.000.000-00`,
  BG: ``,
  CL: ``,
  CY: ``,
  CZ: ``,
  DK: ``,
  EE: ``,
  FI: ``,
  FR: ``,
  DE: `T220001293`,
  GR: ``,
  HU: ``,
  IE: ``,
  IT: ``,
  LT: ``,
  LV: ``,
  LU: ``,
  MT: ``,
  NL: `ABCDEFGHI`,
  NO: ``,
  PL: `123456-12345`,
  PT: ``,
  SK: ``,
  SL: ``,
  ES: ``,
  SE: ``,
  CH: `756.1234.5678.90`,
  GB: `AA012344B`,
  US: ``,
  CA: ``
};

const genCRN = countryCode => {
  return data[countryCode];
};

module.exports = genCRN;
