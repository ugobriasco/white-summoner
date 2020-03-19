const chai = require('chai');
chai.should();

const mccValidate = require('../mcc-validate');

describe('profile/mcc-validate', () => {
  it('should return the input-mcc if valid', done => {
    const mcc = '7392';
    const validation = mccValidate(mcc);
    validation.should.be.equal('7392');
    done();
  });

  it('should return false if the mcc-input is invalid', done => {
    const mcc = '99999';
    const validation = mccValidate(mcc);
    validation.should.be.equal(false);
    done();
  });

  it('should return false if the mcc-input is empty', done => {
    const validation = mccValidate();
    validation.should.be.equal(false);
    done();
  });
});
