const { mccs } = require('../data');

const validateMCC = mcc => {
  if (!mcc) {
    return false;
  }
  const check = mccs.filter(availableMCC => availableMCC.mcc === mcc);
  return check.length > 0 ? mcc : false;
};

module.exports = validateMCC;
