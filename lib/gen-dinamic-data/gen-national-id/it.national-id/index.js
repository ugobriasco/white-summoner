const CodiceFiscale = require("./CodiceFiscale");

function genItNationalID({
  name = "Enzo",
  surname = "righi",
  gender = "M",
  dob = new Date("06-10-1957"),
  birthplace = "Napoli",
  birthplaceProvincia = "NA"
}) {
  const day = dob.getDay();
  const month = dob.getMonth() + 1;
  const year = dob.getFullYear();

  var cf = CodiceFiscale.compute({
    name,
    surname,
    gender,
    day,
    month,
    year,
    birthplace,
    birthplaceProvincia
  });
  return cf;
}

module.exports = { genItNationalID };
