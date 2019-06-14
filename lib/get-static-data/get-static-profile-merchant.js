function getStaticMerchantProfile(countryCode) {
  // const mock = require(`./data/${countryCode.toLowerCase()}.profile.js`);
  // if (mock) return mock.merchant_profile;

  return {
    legal_type_id: 13,
    merchant_category_code: "7392",
    nature_and_purpose: "NatureAndPurpose êcwajfclue",
    company_name: "Company Hprxxbiwàs",
    address: {
      country: "DE",
      address_line1: "Address1 123tCbihhímxhl",
      city: "Berlin",
      post_code: "12345",
      landline: "004915000000000"
    }
  };
}

module.exports = { getStaticMerchantProfile };
