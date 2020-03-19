const { randomArrayElement, randomNumber } = require('../gen-random-var');

const sampleData = {
  loc: [
    { city: 'Zürich', plz: 8000 },
    { city: 'Basel', plz: 4000 },
    { city: 'Bern', plz: 3000 },
    { city: 'Winterthur', plz: 8400 },
    { city: 'Luzern', plz: 6000 }
  ],
  street: [
    'Grossmannstrasse',
    'Badenerstrasse',
    'Baslerstrasse',
    'Langstrasse',
    'Butsenstrasse',
    'Zähringerstrasse',
    'Grenzachstrasse',
    'Feldberstrasse',
    'Missionstrasse',
    'Spitalstrasse',
    'Wilhelm His-Strasse'
  ]
};

function randomAddressSwitzerland() {
  const loc = randomArrayElement(sampleData.loc);
  const street = `${randomArrayElement(sampleData.street)} ${randomNumber(2)} `;
  return {
    address_line1: street,
    city: loc.city,
    post_code: loc.plz.toString(),
    region_name: loc.city
  };
}

module.exports = { randomAddressSwitzerland };
