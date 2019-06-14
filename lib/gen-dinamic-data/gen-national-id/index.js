const { genItNationalID } = require("./it.national-id");
const staticNatIDList = require("./static-nat-ids");

// This is how profile looks like:
// { country: 'PL',
//   credentials: { username: '', password: '' },
//   personal_profile:
//    { first_name: 'Paulina',
//      last_name: 'Wilk',
//      date_of_birth: 1989-02-27T23:00:00.000Z,
//      mobile_phone: '+481374860412',
//      address:
//       { country: 'PL',
//         address_line1: '517 Lea Green',
//         address_line2: '',
//         city: 'Kawabury',
//         post_code: '66-001',
//         region_id: 404,
//         region_name: 'Podkarpackie',
//         landline: '+481374860412',
//         first_name: 'Paulina',
//         last_name: 'Wilk',
//         company: 'Umbrella Corp. pl' },
//      national_id: '' },
//

function genNationalID(profile = {}) {
  if (!profile.country) return "";
  const key = profile.country.toUpperCase();

  if (key == "IT") {
    const user = profile.personal_profile;
    return genItNationalID({
      name: user.first_name,
      surname: user.last_name,
      dob: user.date_of_birth
    });
  }

  if (staticNatIDList[key] === undefined) return "";
  return `${staticNatIDList[key]}`;
}

module.exports = { genNationalID };
