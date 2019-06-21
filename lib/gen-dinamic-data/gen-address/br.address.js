const { randomArrayElement, randomNumber } = require("../gen-random-var");
const faker = require("faker");

const regions = [
  {
    id: 369,
    name: "Acre - AC",
    zip: `69999-${randomNumber(3).toString()}`
  },
  {
    id: 370,
    name: "Alagoas - AL",
    zip: `57999-${randomNumber(3).toString()}`
  },
  {
    id: 371,
    name: "Amazonas - AM",
    zip: `69299-${randomNumber(3).toString()}`
  },
  {
    id: 372,
    name: "Amapá - AP",
    zip: `13900-${randomNumber(3).toString()}`
  },
  {
    id: 373,
    name: "Bahia - BA",
    zip: `48999-${randomNumber(3).toString()}`
  },
  {
    id: 374,
    name: "Ceará - CE",
    zip: `63999-${randomNumber(3).toString()}`
  },
  {
    id: 375,
    name: "Distrito Federal - DF",
    zip: `73699-${randomNumber(3).toString()}`
  },
  {
    id: 376,
    name: "Espírito Santo - ES",
    zip: `29999-${randomNumber(3).toString()}`
  },
  {
    id: 377,
    name: "Goiás - GO",
    zip: `72999-${randomNumber(3).toString()}`
  },
  {
    id: 378,
    name: "Maranhão - MA",
    zip: `65999-${randomNumber(3).toString()}`
  },
  {
    id: 379,
    name: "Minas Gerais - MG",
    zip: `39999-${randomNumber(3).toString()}`
  },
  {
    id: 380,
    name: "Mato Grosso do Sul - MS",
    zip: `79999-${randomNumber(3).toString()}`
  },
  {
    id: 381,
    name: "Mato Grosso - MT",
    zip: `78899-${randomNumber(3).toString()}`
  },
  {
    id: 382,
    name: "Pará - PA",
    zip: `68899-${randomNumber(3).toString()}`
  },
  {
    id: 383,
    name: "Paraíba - PB",
    zip: `58999-${randomNumber(3).toString()}`
  },
  {
    id: 384,
    name: "Pernambuco - PE",
    zip: `56999-${randomNumber(3).toString()}`
  },
  {
    id: 385,
    name: "Piauí - PI",
    zip: `64999-${randomNumber(3).toString()}`
  },
  {
    id: 386,
    name: "Paraná - PR",
    zip: `87999-${randomNumber(3).toString()}`
  },
  {
    id: 387,
    name: "Rio de Janeiro - RJ",
    zip: `28999-${randomNumber(3).toString()}`
  },
  {
    id: 388,
    name: "Rio Grande do Norte - RN",
    zip: `99999-${randomNumber(3).toString()}`
  },
  {
    id: 389,
    name: "Rondonia - RO",
    zip: `78999-${randomNumber(3).toString()}`
  },
  {
    id: 390,
    name: "Roraima - RR",
    zip: ` 69399-${randomNumber(3).toString()}`
  },
  {
    id: 391,
    name: "Rio Grande do Sul - RS",
    zip: `99999-${randomNumber(3).toString()}`
  },
  {
    id: 392,
    name: "Santa Catarina - SC",
    zip: `89999-${randomNumber(3).toString()}`
  },
  {
    id: 393,
    name: "Sergipe - SE",
    zip: `49999-${randomNumber(3).toString()}`
  },
  {
    id: 394,
    name: "São Paulo - SP",
    zip: `04013-${randomNumber(3).toString()}`
  },
  {
    id: 395,
    name: "Tocantins - TO",
    zip: `77999-${randomNumber(3).toString()}`
  }
];

function randomAddressBrazil() {
  faker.locale = "pt_BR";
  const randomRegion = randomArrayElement(regions);
  const address_line1 = faker.address.streetAddress();
  const city = faker.address.city();
  const post_code = randomRegion.zip;
  const region_name = randomRegion.name;
  const region_id = randomRegion.id;

  return {
    address_line1,
    city,
    post_code,
    region_name,
    region_id
  };
}

module.exports = { randomAddressBrazil };
