const { genBirthday } = require("./gen-birthday");
const { randomArrayElement } = require("../util/random-array-element");
const { names } = require("../data");

function genAnagrafica(nat) {
  const _names = names.filter(
    locName => locName.country_code === nat.toUpperCase()
  );

  if (_names.length === 0) return {};

  const sex = randomArrayElement(["male", "female"]);

  const randomName = randomArrayElement(_names[0][sex]);
  const randomSurname = randomArrayElement(_names[0].surnames);

  const first_name = randomName;
  const last_name = randomSurname;
  const date_of_birth = genBirthday();

  return { first_name, last_name, date_of_birth };
}

module.exports = { genAnagrafica };
