# Summoner

## Intro

This is a node library for generating test users/merchants with realistic anagraphical data, address, phone numbers, MCCs and VAT ids. It is particulary sutable for eCom, fintech and KYC applications.

## Installation

```
  npm i summoner
```

## Usage

```
  const getUser = require('summoner');

  // Get a user given country code
  const user = getUser("DE")

  console.log(user)

  /* Returns:
  {
    country: 'DE',
    personal_profile: {
      first_name: 'Niklas',
      last_name: 'Seidel',
      date_of_birth: 1962-06-20T23:00:00.000Z,
      mobile_phone: '+491601549854',
      national_id: 'T220001293'
    },
    merchant_profile: {
      merchant_category_code: '7392',
      nature_and_purpose: 'Life is our purpose',
      company_name: 'Umbrella Corp. DE',
      vat_id: 'DE285998050',
      permanent_certificate_access_code: 'PCAC123456',
      website: 'http://villains.wikia.com/wiki/Umbrella_Corporation',
      mobile_phone: '+491601549854'
    },
    address: {
      country: 'DE',
      address_line1: '418 Pogorzelski Villages',
      address_line2: '',
      city: 'Neu Mohammeddorf',
      post_code: '88297',
      region_name: 'Thüringen',
      landline: '+491601549854',
      first_name: 'Niklas',
      last_name: 'Seidel',
      company: 'Umbrella Corp. DE'
    }
  }
  */

```

### Covered country codes

```
 AL AR AM AU AT AZ BD BE BA BR BZ BG CA CL CN CO CR DK EG GB EE FI FR GE DE GR HU IN IR IL IT JP KR MX MA NP NL NZ NG NO PK PL PT RO RU SA SK SI ES SE CH TR UA US VN
```

_Note:_ not all the countries have complete coverage. In case of mistakes, please open an issue or contribute to the project

## Development

### Preequisites

- node 8+
- npm 6+
- dependency-cruiser 4+ (for updating dependency graph)

### Setup

```
  git clone git@github.com:ugobriasco/summoner.git
  cd ./summmoner
  npm i
```

### Test

Run `npm test` to execute the unit and integration tests. It requires the following framework:

- [Mocha](https://mochajs.org/).
- [Chai](http://chaijs.com).

You can also run unit tests (`npm run test:unit`) or integration tests (`npm run test:integration`) separately

### Architecture

![depgraph](./dependencygraph.svg)

### Sources

- Faker (been soon deprecated)
- https://github.com/greggles/mcc-codes

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

## License

MIT
