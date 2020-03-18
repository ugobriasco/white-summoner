const genBrCRN = require('./crn-br');
const genClCRN = require('./crn-cl');
const genStaticCRN = require('./crn-static');

const genCRN = countryCode => {
  if (countryCode == 'BR') {
    return genBrCRN();
  }
  if (countryCode == 'CL') {
    return genClCRN();
  }
  return genStaticCRN(countryCode);
};

module.exports = genCRN;
