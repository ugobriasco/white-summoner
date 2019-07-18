const { cnpj } = require('./gen-cnpj');

const getBrCompanyRegistrationNumber = () => {
  return cnpj.generate();
};

module.exports = getBrCompanyRegistrationNumber;
