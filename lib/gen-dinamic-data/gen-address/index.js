const faker = require('faker');
const { mapFaker } = require('../map-faker');
const { randomNumber } = require('../gen-random-var');
const { randomAddressChile } = require('./address-cl');
const { randomAddressBrazil } = require('./address-br');
const { randomAddressSwitzerland } = require('./address-ch');
const { randomESRegionName } = require('./address-es');

async function genAddress(nat) {
  const fakerLocale = mapFaker(nat);

  if (nat.toLowerCase() == 'cl') return randomAddressChile();
  if (nat.toLowerCase() == 'br') return randomAddressBrazil();
  if (nat.toLowerCase() == 'ch') return randomAddressSwitzerland();

  if (!fakerLocale) {
    return {};
  }

  faker.locale = fakerLocale;
  const address_line1 = faker.address.streetAddress();
  const address_line2 = randomNumber(2).toString();
  const city = faker.address.city();
  const post_code = faker.address.zipCode();
  const region_name =
    nat.toLowerCase() === 'es' ? randomESRegionName() : faker.address.state();

  const region_id = null;

  const address = {
    address_line1,
    address_line2,
    city,
    post_code,
    region_name,
    region_id
  };

  return address;
}

module.exports = { genAddress };
