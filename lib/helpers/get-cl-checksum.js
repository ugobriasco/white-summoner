const checksumFactors = [3, 2, 7, 6, 5, 4, 3, 2];

// Checksum generator for chilean RUN/RUT numbers
const getChecksum = digits => {
  const arrayOfDigits = Array.from(`${digits}`, Number);

  let factorial = 0;

  arrayOfDigits.forEach((item, i) => {
    factorial = factorial + item * checksumFactors[i];
  });

  const rest = 11 - (factorial % 11);

  let checksum = '';
  if (rest == 11) {
    checksum = '0';
  } else if (rest == 10) {
    checksum = 'K';
  } else {
    checksum = String(rest);
  }

  return checksum;
};

module.exports = getChecksum;
