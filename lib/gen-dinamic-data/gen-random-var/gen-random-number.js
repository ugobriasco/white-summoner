const randomNumber = digits =>
  Math.floor(
    Math.pow(10, digits - 1) + Math.random() * 9 * Math.pow(10, digits - 1)
  );

const openRangedRandomNumber = (upperRange, lowerRange) =>
  Math.floor(Math.random() * (upperRange - lowerRange + 1)) + lowerRange;

module.exports = { randomNumber, openRangedRandomNumber };
