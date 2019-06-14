async function genCompany(nat) {
  const legal_type_id = null;

  const merchant_category_code = "7392";
  const nature_and_purpose = "Life is our purpose";
  const company_name = `Umbrella Corp. ${nat}`;

  //const company_registration_number = "123456789";

  const vat_id = "";
  const permanent_certificate_access_code = "PCAC123456";
  const website = "http://villains.wikia.com/wiki/Umbrella_Corporation";

  return {
    legal_type_id,
    nature_and_purpose,
    company_name,
    vat_id,
    permanent_certificate_access_code,
    website
  };
}

module.exports = { genCompany };
