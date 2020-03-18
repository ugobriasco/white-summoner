const chai = require('chai');
chai.should();

const countries = require('../country-list');
const names = require('../names-list');
const mccs = require('../mccs-available');

describe('data', () => {
  before(() => {
    console.log(
      '\x1b[36m%s\x1b[0m',
      `    total countries available: ${countries.length}`
    );
    console.log(
      '\x1b[36m%s\x1b[0m',
      `    total locale available for names: ${names.length}`
    );
    console.log('\x1b[36m%s\x1b[0m', `    total mcc available: ${mccs.length}`);
  });

  describe('countries-available', () => {
    it('provides country codes', done => {
      //let codes = [];
      countries.forEach(country => {
        const { country_code } = country;
        country_code.should.be.a('string');
        //codes.push(country_code);
      });
      //console.log(codes);

      done();
    });
  });
  describe('names-list', () => {
    it('provides country code', done => {
      //let codes = [];
      names.forEach(locale => {
        const { country_code } = locale;
        country_code.should.be.a('string');
        //codes.push(country_code);
      });
      //console.log(codes);

      done();
    });
  });
  describe('mccs-available', () => {
    it('provides mcc-code', done => {
      //let codes = [];
      mccs.forEach(_mcc => {
        const { mcc } = _mcc;
        mcc.should.be.a('string');
        //codes.push(mcc);
      });
      //console.log(codes);

      done();
    });
  });
});
