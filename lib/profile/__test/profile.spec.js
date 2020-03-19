const chai = require('chai');
chai.should();

// Methods under test
const { Profile } = require('../Profile');

describe('profile model', () => {
  describe('Profile', () => {
    it('should exist', done => {
      const p = new Profile();
      p.should.be.a('object');
      done();
    });
  });
  describe('Profile.getProfile', () => {
    it('should return an object', done => {
      const p = new Profile();
      p.getProfile().should.be.a('object');
      done();
    });
  });
  describe('Profile.setCountryCode', () => {
    it('should be able to fetch a given address');
  });
  describe('Profile.fetchAnagrafica', () => {
    it('should be able to fetch a anagrafica');
  });
  describe('Profile.fetchPhoneNumber', () => {
    it('should be able to fetch a phone number');
  });
  describe('Profile.fetchNationalID', () => {
    it('should be able to fetch a national id');
  });
  describe('Profile.fetchVat', () => {
    it('should be able to fetch a vat id');
  });
  describe('Profile.fetchBusinessProfile', () => {
    it('should be able to fetch a valid merchant profile');
  });
  describe('Profile.updateMerchantCathegoryCode', () => {
    it('should be able to fetch mcc');
  });
});
