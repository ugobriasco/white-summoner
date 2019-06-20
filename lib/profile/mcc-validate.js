const { mccs } = require("../data");

const validateMCC = mcc => {
  if (!mcc) return;
  const check = mccs.filter(availableMCC => {
    availableMCC.mcc === mcc;
  });
  return check.length < 1 ? mcc : false;
};

module.exports = validateMCC;
