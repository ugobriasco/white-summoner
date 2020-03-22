//https://github.com/mock-end/random-birthday
const randomBirthday = require('random-birthday');

function genBirthday() {
  return randomBirthday({ type: 'adult' });
}

module.exports = { genBirthday };
