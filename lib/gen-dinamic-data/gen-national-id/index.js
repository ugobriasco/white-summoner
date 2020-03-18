const { genItNationalID } = require('./national-id-it');
const staticNatIDList = require('./national-id-static');
const genNationalIdCL = require('./national-id-cl');

const genNationalID = profile => {
  if (!profile || !profile.country) {
    return '';
  }

  const key = profile.country.toUpperCase();

  if (key == 'IT') {
    const user = profile.personal_profile;
    return genItNationalID({
      name: user.first_name,
      surname: user.last_name,
      dob: user.date_of_birth
    });
  }

  if (key == 'CL') {
    return genNationalIdCL();
  }

  if (staticNatIDList[key] === undefined) {
    return '';
  }

  return `${staticNatIDList[key]}`;
};

module.exports = { genNationalID };
