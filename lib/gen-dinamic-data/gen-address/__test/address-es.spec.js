const chai = require('chai');
chai.should();

// Methods under test
const { randomESRegionName } = require('../address-es');

describe('gen-address/randomESRegionName', () => {
  it('should be a non-empty string', done => {
    const a = randomESRegionName();
    a.should.be.a('string');
    a.should.not.be.equal('');
    done();
  });
});
