const { getMyDate } = require("./util/get-my-date");
exports.genCredentials = req => {
  const countryID = req.params.countryID || "DE";
  // see https://sumupteam.atlassian.net/browse/AK-160
  const name = `ugo.${countryID.toLowerCase()}.${getMyDate()}@example.com`;

  return {
    username: req.body.username || name,
    password: req.body.password || req.body.username || name
  };
};
