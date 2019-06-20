const allCountries = require("./country-list");
const allNames = require("./names-list");

/*
 *  total countries available: 232
 *  total locale available for names: 55
 */

const fullSupported = ["BR", "CH", "DE", "IT", "PL", "NL", "GB"];
const complemented = allNames.map(country => country.country_code);

module.exports = fullSupported.concat(complemented);
