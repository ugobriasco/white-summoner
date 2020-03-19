const axios = require('axios');

async function validateProfile(profile = {}) {
  try {
    const countryCode = profile.country || 'de';

    const url = `https://users-beta.sam-app.ro/v0.1/users/meta/${countryCode}`;
    const schema = await axios.get(url).then(res => res.data);

    //console.log(schema);

    // key=credentials  value=[object Object]

    const checkEmail = matchSchema('aaa', schema.credentials.username);
    console.log(checkEmail);

    // key=country  value=[object Object]
    // key=personal_profile  value=[object Object]
    // key=referral  value=[object Object]
    // key=extra  value=[object Object]

    // Object.keys(schema.personal_profile).map(e =>
    //   console.log(`key=${e}  value=${schema[e]}`)
    // );

    return {};

    //const schema = suGetUserSchema(countryCode);
  } catch (e) {
    console.log(e);
  }
}

function matchSchema(dataEntry = '', schemaEntry = {}) {
  if (!schemaEntry.meta.required) return true;
  if (!schemaEntry.meta.regex) return true;
  if (!dataEntry) return false;

  return dataEntry.matches(
    /(?-mix:\A\w[^\s@]*@[^\s\.@]+\.[^\s\.@][^\s@]+\z)/,
    'g'
  );
}

module.exports = { validateProfile };
