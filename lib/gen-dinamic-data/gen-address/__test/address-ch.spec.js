const chai = require('chai');
chai.should();

// Methods under test
const { randomAddressSwitzerland } = require('../address-ch');

describe('gen-address/randomAddressSwitzerland', () => {
  it('should contain address_line1', done => {
    const a = randomAddressSwitzerland();
    a.address_line1.should.be.a('string');
    a.address_line1.should.not.be.equal('');
    done();
  });
  it('should contain a city', done => {
    const a = randomAddressSwitzerland();
    a.city.should.be.a('string');
    a.city.should.not.be.equal('');
    done();
  });
  it('should contain a post_code', done => {
    const a = randomAddressSwitzerland();
    a.post_code.should.be.a('string');
    a.post_code.should.not.be.equal('');
    done();
  });
  it('should contain a region name', done => {
    const a = randomAddressSwitzerland();
    a.region_name.should.be.a('string');
    a.region_name.should.not.be.equal('');
    done();
  });
});
