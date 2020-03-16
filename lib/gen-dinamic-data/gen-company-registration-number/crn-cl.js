const { openRangedRandomNumber, randomNumber } = require('../gen-random-var');
const { getChecksumCL } = require('../../helpers');

const generateRUT = () => {
  // company registration numbers for Chile should starts with 5 or greater
  const firstDigit = openRangedRandomNumber(5, 9);
  const trailingDigits = randomNumber(7);
  const checksum = getChecksumCL(`${firstDigit}${trailingDigits}`);

  return `${firstDigit}${trailingDigits}${checksum}`;
};

module.exports = generateRUT;
