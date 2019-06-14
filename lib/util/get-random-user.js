const axios = require("axios");
const logger = require("./logger");

// https://randomuser.me/api/1.1/
//v1.1: AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, IR, NL, NZ, TR, US
function getRandomUser(nat) {
  if (!nat) return {};
  const countryCodes = [
    "AU",
    "BR",
    "CA",
    "CH",
    "DE",
    "DK",
    "ES",
    "FI",
    "FR",
    "GB",
    "IE",
    "IR",
    "NL",
    "NZ",
    "TR",
    "US"
  ];
  if (!countryCodes.includes(nat.toUpperCase())) return {};

  const url = `https://randomuser.me/api/1.1/?nat=${nat}`;

  return axios
    .get(url)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      logger.error("The getRandomUser trows an error:", err);
      throw Error(err);
    });
}

module.exports = getRandomUser;
