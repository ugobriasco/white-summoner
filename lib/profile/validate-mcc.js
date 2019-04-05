exports.validateMCC = req => {
  if (!req.body.mcc) return;
  const check = availableMCCs.filter(availableMCC => {
    availableMCC.mcc === req.body.mcc;
  });
  // TODO improve validation strategy
  if (check.length < 1) return undefined;
  return req.body.mcc;
};
