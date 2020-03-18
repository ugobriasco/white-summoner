const getCRN = require('./gen-company-registration-number');

async function genCompany(nat) {
  const legal_type_id = null;

  const merchant_category_code = '7392';
  const nature_and_purpose = 'Life is our purpose';
  const company_name = `Umbrella Corp. ${nat}`;
  const vat_id = '';
  const website = 'http://villains.wikia.com/wiki/Umbrella_Corporation';
  const company_registration_number = getCRN(nat);

  return {
    legal_type_id,
    nature_and_purpose,
    company_name,
    vat_id,
    company_registration_number,
    website
  };
}

module.exports = { genCompany };
