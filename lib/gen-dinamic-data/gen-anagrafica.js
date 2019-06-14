const { genBirthday } = require("./gen-birthday");
const { randomArrayElement } = require("../util/random-array-element");
const namesList = require("../data/names-list");

function genAnagrafica(nat) {
  const names = namesList.filter(
    locName => locName.country_code === nat.toUpperCase()
  );

  if (names.length === 0) return {};

  const sex = randomArrayElement(["male", "female"]);

  const randomName = randomArrayElement(names[0][sex]);
  const randomSurname = randomArrayElement(names[0].surnames);

  // see https://sumupteam.atlassian.net/browse/AK-160
  const first_name = `AutomationTest ${randomName}`;
  const last_name = `AutomationTest ${randomSurname}`;
  const date_of_birth = genBirthday();

  return { first_name, last_name, date_of_birth };
}

module.exports = { genAnagrafica };
