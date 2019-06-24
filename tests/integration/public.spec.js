const exec = require("child_process").exec;
const chai = require("chai");
chai.should();

// Test Data
const { countriesAvailable } = require("../../lib/data");

// Methods under test
const getProfile = require("../../../white-summoner");

before(() => {
  exec("npm run build:deptree");
  const currentPath = process.cwd();
  console.log(
    "\x1b[36m%s\x1b[0m",
    `--> Dependency tree available under ${currentPath}/dependencygraph.svg \n\n`
  );
});

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
      countriesAvailable.forEach(country => {
        it(`covers ${country}`, done => {
          getProfile({ countryCode: country }).then(data => {
            data.country.should.be.equal(country);
            data.address.country.should.be.equal(country);
            data.address.country.should.be.equal(country);
            if (
              country == "JP" ||
              country == "DE" ||
              country == "US" ||
              country == "CL" ||
              country == "CO"
            ) {
              console.log(data);
            }
            done();
          });
        });
      });
    });
  });
});
