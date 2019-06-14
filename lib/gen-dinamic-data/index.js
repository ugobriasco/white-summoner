const { genBirthday } = require("./gen-birthday");
const { genAnagrafica } = require("./gen-anagrafica");
const { genAddress } = require("./gen-address");
const { genCompany } = require("./gen-company");
const { genPhoneNumber } = require("./gen-phone-number");
const { genVat } = require("./gen-vat");
const { genNationalID } = require("./gen-national-id");

module.exports = {
  genBirthday,
  genAnagrafica,
  genAddress,
  genCompany,
  genPhoneNumber,
  genVat,
  genNationalID
};
