const { getStaticPersonalProfile } = require("./get-static-profile-personal");
const { getStaticMerchantProfile } = require("./get-static-profile-merchant");
const { getStaticNationalID } = require("./get-static-national-id");
const { getStaticVatID } = require("./get-static-vat-id");

module.exports = {
  getStaticPersonalProfile,
  getStaticMerchantProfile,
  getStaticNationalID,
  getStaticVatID
};
