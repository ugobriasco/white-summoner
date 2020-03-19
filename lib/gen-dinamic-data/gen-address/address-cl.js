const { randomArrayElement, randomNumber } = require('../gen-random-var');

const sampleData = {
  loc: [
    { city: 'Cerrillos', plz: 13102 },
    { city: 'Cerro Navia', plz: 13103 },
    { city: 'Conchalí', plz: 13104 },
    { city: 'El Bosque', plz: 13105 },
    { city: 'Estación Central', plz: 13106 },
    { city: 'Huechuraba', plz: 13107 },
    { city: 'Independencia', plz: 13108 },
    { city: 'La Cisterna', plz: 13109 },
    { city: 'La Florida', plz: 13110 },
    { city: 'La Granja', plz: 13111 },
    { city: 'La Pintana', plz: 13112 },
    { city: 'La Reina', plz: 13113 },
    { city: 'Las Condes', plz: 13114 },
    { city: 'Lo Barnechea', plz: 13115 },
    { city: 'Lo Espejo', plz: 13116 },
    { city: 'Lo Prado', plz: 13117 },
    { city: 'Macul', plz: 13118 },
    { city: 'Maipú', plz: 13119 },
    { city: 'Ñuñoa', plz: 13120 },
    { city: 'Pedro Aguirre Cerda', plz: 13121 },
    { city: 'Peñalolén', plz: 13122 },
    { city: 'Providencia', plz: 13123 },
    { city: 'Pudahuel', plz: 13124 },
    { city: 'Quilicura', plz: 13125 },
    { city: 'Quinta Normal', plz: 13126 },
    { city: 'Recoleta', plz: 13127 },
    { city: 'Renca', plz: 13128 },
    { city: 'San Joaquín', plz: 13129 },
    { city: 'San Miguel', plz: 13130 },
    { city: 'San Ramón', plz: 13131 },
    { city: 'Santiago', plz: 13101 },
    { city: 'Vitacura', plz: 13132 }
  ],
  street: [
    'Seis Sur',
    'Siete Sur',
    'Ocho Sur',
    'Nueve Sur',
    'Diez Sur',
    'Once Sur',
    'Doce Sur',
    'Trece Sur',
    'Catorce Sur',
    'Cerrillos',
    'La Habana',
    'Clotario Blest',
    'Lucila Godoy',
    'Longotoma',
    'Pomaire',
    'Freirina',
    'Pje'
  ]
};

function randomAddressChile() {
  const loc = randomArrayElement(sampleData.loc);
  const street = `${randomArrayElement(sampleData.street)} ${randomNumber(2)} `;
  return {
    address_line1: street,
    city: loc.city,
    post_code: loc.plz.toString(),
    region_name: loc.city
  };
}

module.exports = { randomAddressChile };
