const chai = require('chai');
chai.should();

// Methods under test
const { genAddress } = require('../../gen-address');
const { countriesAvailable } = require('../../../data');

describe('gen-address', () => {
  it('should generate an object CH address', done => {
    genAddress('CH').then(address => {
      console.log(address);
      address.should.be.a('object');
      done();
    });
  });
  it('should generate object BR address', done => {
    genAddress('BR').then(address => {
      console.log(address);
      address.should.be.a('object');
      done();
    });
  });
  it('should generate object CL address', done => {
    genAddress('CL').then(address => {
      console.log(address);
      address.should.be.a('object');
      done();
    });
  });
  it('should generate object DE address', done => {
    genAddress('DE').then(address => {
      console.log(address);
      address.should.be.a('object');
      done();
    });
  });
  it('should generate object ES address', done => {
    genAddress('ES').then(address => {
      console.log(address);
      address.should.be.a('object');
      done();
    });
  });
  it('should return an object, even if the locale is invalid', done => {
    genAddress('XX').then(address => {
      console.log(address);
      address.should.be.a('object');
      done();
    });
  });
});
