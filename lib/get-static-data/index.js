const { getStaticPersonalProfile } = require('./get-static-profile-personal');
const { getStaticNationalID } = require('./get-static-national-id');
const { getStaticVatID } = require('./get-static-vat-id');

module.exports = {
  getStaticPersonalProfile,
  getStaticNationalID,
  getStaticVatID
};
