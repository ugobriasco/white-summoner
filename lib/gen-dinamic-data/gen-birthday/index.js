const { randomDate } = require('../gen-random-var');

const genBirthday = () => randomBirthday({ type: 'adult' });

const randomBirthday = props => {
  const { type } = props;

  let max = new Date();
  let min = new Date();

  switch (type) {
    case 'child':
      min = min.setFullYear(min.getFullYear() - 12);
      break;
    case 'teen':
      min = min.setFullYear(min.getFullYear() - 17);
      max = max.setFullYear(max.getFullYear() - 13);
      break;
    case 'adult':
      min = min.setFullYear(min.getFullYear() - 64);
      max = max.setFullYear(max.getFullYear() - 18);
      break;
    case 'senior':
      min = min.setFullYear(min.getFullYear() - 99);
      max = max.setFullYear(max.getFullYear() - 65);
      break;
    default:
      min = min.setFullYear(min.getFullYear() - 99);
  }

  return randomDate(min, max);
};

module.exports = { genBirthday, randomBirthday };
