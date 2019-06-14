const chai = require("chai");
chai.should();

// Test Data
const availableCountries = require("../../lib/data/countries-available");

// Methods under test
const getProfile = require("../../lib");

// Test sets
describe("Public methods", () => {
  // Core usage
  describe("lib/getProfile", () => {
    it("should resolve a promise", done => {
      getProfile({
        countryCode: "DE"
      }).then(data => {
        data.should.be.a("object");
        done();
      });
    });
    it("should return a user with a valid country code", done => {
      getProfile({ countryCode: "DE" }).then(data => {
        data.country.should.be.equal("DE");
        done();
      });
    });

    // Localization
    describe("Coverage of available countries", () => {
      availableCountries.forEach(country => {
        it(`covers ${country}`, done => {
          getProfile({ countryCode: country }).then(data => {
            data.country.should.be.equal(country);
            data.personal_profile.address.country.should.be.equal(country);
            data.merchant_profile.address.country.should.be.equal(country);
            if (country == "JP") {
              console.log(data);
            }
            done();
          });
        });
      });
    });
  });
});

/*
{
  country: 'DE',
  credentials: { username: '', password: '' },
  personal_profile: {
    first_name: 'AutomationTest Celina',
    last_name: 'AutomationTest Vogt',
    date_of_birth: 1977-06-13T23:00:00.000Z,
    mobile_phone: '+491605857486',
    address: {
      country: 'DE',
      address_line1: '1287 Enrico Rue',
      address_line2: '',
      city: 'Süd Marisa',
      post_code: '15248',
      region_id: null,
      region_name: 'Schleswig-Holstein',
      landline: '+491605857486',
      first_name: 'AutomationTest Celina',
      last_name: 'AutomationTest Vogt',
      company: 'Umbrella Corp. DE'
    },
    national_id: 'T220001293'
  },
  merchant_profile: {
    legal_type_id: null,
    merchant_category_code: '7392',
    nature_and_purpose: 'Life is our purpose',
    company_name: 'Umbrella Corp. DE',
    vat_id: 'DE228412676',
    permanent_certificate_access_code: 'PCAC123456',
    website: 'http://villains.wikia.com/wiki/Umbrella_Corporation',
    mobile_phone: '+491605857486',
    address: {
      country: 'DE',
      address_line1: '1287 Enrico Rue',
      address_line2: '',
      city: 'Süd Marisa',
      post_code: '15248',
      region_id: null,
      region_name: 'Schleswig-Holstein',
      landline: '+491605857486',
      first_name: 'AutomationTest Celina',
      last_name: 'AutomationTest Vogt',
      company: 'Umbrella Corp. DE'
    }
  }

*/
