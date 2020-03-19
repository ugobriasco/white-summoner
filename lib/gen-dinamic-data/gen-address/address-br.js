const { randomArrayElement, randomNumber } = require('../gen-random-var');
const faker = require('faker');

const regions = [
  {
    name: 'Acre - AC',
    zip: `69999-${randomNumber(3).toString()}`
  },
  {
    name: 'Alagoas - AL',
    zip: `57999-${randomNumber(3).toString()}`
  },
  {
    name: 'Amazonas - AM',
    zip: `69299-${randomNumber(3).toString()}`
  },
  {
    name: 'Amapá - AP',
    zip: `13900-${randomNumber(3).toString()}`
  },
  {
    name: 'Bahia - BA',
    zip: `48999-${randomNumber(3).toString()}`
  },
  {
    name: 'Ceará - CE',
    zip: `63999-${randomNumber(3).toString()}`
  },
  {
    name: 'Distrito Federal - DF',
    zip: `73699-${randomNumber(3).toString()}`
  },
  {
    name: 'Espírito Santo - ES',
    zip: `29999-${randomNumber(3).toString()}`
  },
  {
    name: 'Goiás - GO',
    zip: `72999-${randomNumber(3).toString()}`
  },
  {
    name: 'Maranhão - MA',
    zip: `65999-${randomNumber(3).toString()}`
  },
  {
    name: 'Minas Gerais - MG',
    zip: `39999-${randomNumber(3).toString()}`
  },
  {
    name: 'Mato Grosso do Sul - MS',
    zip: `79999-${randomNumber(3).toString()}`
  },
  {
    name: 'Mato Grosso - MT',
    zip: `78899-${randomNumber(3).toString()}`
  },
  {
    name: 'Pará - PA',
    zip: `68899-${randomNumber(3).toString()}`
  },
  {
    name: 'Paraíba - PB',
    zip: `58999-${randomNumber(3).toString()}`
  },
  {
    name: 'Pernambuco - PE',
    zip: `56999-${randomNumber(3).toString()}`
  },
  {
    name: 'Piauí - PI',
    zip: `64999-${randomNumber(3).toString()}`
  },
  {
    name: 'Paraná - PR',
    zip: `87999-${randomNumber(3).toString()}`
  },
  {
    name: 'Rio de Janeiro - RJ',
    zip: `28999-${randomNumber(3).toString()}`
  },
  {
    name: 'Rio Grande do Norte - RN',
    zip: `99999-${randomNumber(3).toString()}`
  },
  {
    name: 'Rondonia - RO',
    zip: `78999-${randomNumber(3).toString()}`
  },
  {
    name: 'Roraima - RR',
    zip: ` 69399-${randomNumber(3).toString()}`
  },
  {
    name: 'Rio Grande do Sul - RS',
    zip: `99999-${randomNumber(3).toString()}`
  },
  {
    name: 'Santa Catarina - SC',
    zip: `89999-${randomNumber(3).toString()}`
  },
  {
    name: 'Sergipe - SE',
    zip: `49999-${randomNumber(3).toString()}`
  },
  {
    name: 'São Paulo - SP',
    zip: `04013-${randomNumber(3).toString()}`
  },
  {
    name: 'Tocantins - TO',
    zip: `77999-${randomNumber(3).toString()}`
  }
];

function randomAddressBrazil() {
  faker.locale = 'pt_BR';
  const randomRegion = randomArrayElement(regions);
  const address_line1 = faker.address.streetAddress();
  const city = faker.address.city();
  const post_code = randomRegion.zip;
  const region_name = randomRegion.name;

  return {
    address_line1,
    city,
    post_code,
    region_name
  };
}

module.exports = { randomAddressBrazil };
