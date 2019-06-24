const chai = require("chai");
chai.should();

// Methods under test
const { getProfile } = require("../get-profile");

describe("profile/get-profile", () => {
  it("Accepts an object as input parameter, including countryCode", done => {
    getProfile({ countryCode: "DE" }).then(data => {
      data.country.should.be.equal("DE");
      done();
    });
  });
  it("Accepts a string as input parameter", done => {
    getProfile("DE").then(data => {
      data.country.should.be.equal("DE");
      done();
    });
  });
});
