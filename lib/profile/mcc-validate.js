const availableMCCs = require("../data/mccs-available");

const validateMCC = mcc => {
  if (!mcc) return;
  const check = availableMCCs.filter(availableMCC => {
    availableMCC.mcc === mcc;
  });
  return check.length < 1 ? mcc : false;
};

module.exports = validateMCC;
