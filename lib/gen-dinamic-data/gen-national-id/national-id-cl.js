const { openRangedRandomNumber, randomNumber } = require('../gen-random-var');
const { getChecksumCL } = require('../../helpers');

const generateRUN = () => {
  // company registration numbers for Chile should stat with a digit below 5
  const firstDigit = openRangedRandomNumber(0, 5);
  const trailingDigits = randomNumber(7);
  const checksum = getChecksumCL(`${firstDigit}${trailingDigits}`);

  return `${firstDigit}${trailingDigits}${checksum}`;
};

module.exports = generateRUN;
