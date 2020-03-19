const chai = require('chai');
chai.should();

// Methods under test
const { randomAddressChile } = require('../address-cl');

describe('gen-address/randomAddressChile', () => {
  it('should contain address_line1', done => {
    const a = randomAddressChile();
    a.address_line1.should.be.a('string');
    a.address_line1.should.not.be.equal('');
    done();
  });
  it('should contain a city', done => {
    const a = randomAddressChile();
    a.city.should.be.a('string');
    a.city.should.not.be.equal('');
    done();
  });
  it('should contain a post_code', done => {
    const a = randomAddressChile();
    a.post_code.should.be.a('string');
    a.post_code.should.not.be.equal('');
    done();
  });
  it('should contain a region name', done => {
    const a = randomAddressChile();
    a.region_name.should.be.a('string');
    a.region_name.should.not.be.equal('');
    done();
  });
});
