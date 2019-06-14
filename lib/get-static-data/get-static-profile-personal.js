function getStaticPersonalProfile(countryCode) {
  //const mock = require(`./data/${countryCode.toLowerCase()}.profile.js`);
  //if (mock) return mock.personal_profile;

  return {
    first_name: "automationTestFirstNamê",
    last_name: "automationTestLastNamê",
    date_of_birth: "1980-01-01",
    address: {
      country: countryCode || "DE",
      address_line1: "Address1 123tMrajwcjbbí",
      city: "Berlin",
      post_code: "12345"
    }
  };
}

module.exports = { getStaticPersonalProfile };
