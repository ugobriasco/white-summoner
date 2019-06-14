const faker = require("faker");
const { mapFaker } = require("../map-faker");
const { randomAddressChile } = require("./cl.address");
const { randomAddressBrazil } = require("./br.address");
const { randomAddressSwitzerland } = require("./ch.address");
const { randomESRegionName } = require("./es.region-names");

async function genAddress(nat) {
  const fakerLocale = mapFaker(nat);

  if (nat.toLowerCase() == "cl") return randomAddressChile();
  if (nat.toLowerCase() == "br") return randomAddressBrazil();
  if (nat.toLowerCase() == "ch") return randomAddressSwitzerland();

  if (!fakerLocale) {
    return {};
  }

  faker.locale = fakerLocale;
  const address_line1 = faker.address.streetAddress();
  const city = faker.address.city();
  const post_code = faker.address.zipCode();
  const region_name =
    nat.toLowerCase() === "es" ? randomESRegionName() : faker.address.state();

  const region_id = null;

  const address = {
    address_line1,
    city,
    post_code,
    region_name,
    region_id
  };

  return address;
}

module.exports = { genAddress };
