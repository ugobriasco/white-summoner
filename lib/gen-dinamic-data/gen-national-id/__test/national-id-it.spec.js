const assert = require('assert');
const chai = require('chai');
chai.should();

const { genItNationalID, CodiceFiscale } = require('../national-id-it');

describe('gen-national-id/national-id-it', () => {
  it('should generate a valid a national ID as String if an empty object is passed', done => {
    const id = genItNationalID({});
    id.should.be.a('string');
    id.should.not.be.equal('');
    done();
  });
  it('should generate a valid a national ID as String if no parameter is passed', done => {
    const id = genItNationalID();
    id.should.be.a('string');
    id.should.not.be.equal('');
    done();
  });
  it('should generate a valid a national ID if a full profile object is sent', done => {
    const profile = {
      name: 'Enzo',
      surname: 'righi',
      gender: 'M',
      dob: new Date('06-10-1957'),
      birthplace: 'Napoli',
      birthplaceProvincia: 'NA'
    };
    const id = genItNationalID(profile);
    id.should.be.a('string');
    id.should.not.be.equal('');
    done();
  });
  it('should generate a valid a national ID if only a date of bith is sent as string', done => {
    const profile = {
      dob: '10-10-2001'
    };
    const id = genItNationalID(profile);
    id.should.be.a('string');
    id.should.not.be.equal('');
    done();
  });
});

const validCF = {
  male: 'RGHNZE57H01F839A',
  female: 'RGHNZE57H41F839E',
  millennial: 'RGHNZE10H04F839P'
};
const invalidCF = {
  wrongCheckSum: 'RGHNZE57H01F839B',
  longer: 'RGHKNZE57H01F839A',
  shorter: 'RGNZE57H01F839A',
  isNotString: 12345678901234
};

describe('gen-national-id/national-id-it/CodiceFiscale', () => {
  describe('CodiceFiscale::check', () => {
    it('should  return true if the CF is valid', done => {
      const code = CodiceFiscale.check(validCF.male);
      code.should.be.equal(true);
      done();
    });

    it('should  return false if the CF has a wrong checksum', done => {
      const code = CodiceFiscale.check(invalidCF.wrongCheckSum);
      code.should.be.equal(false);
      done();
    });

    it('should return false if the CF is longer than 16 chars', done => {
      const code = CodiceFiscale.check(invalidCF.longer);
      code.should.be.equal(false);
      done();
    });
    it('should return false if the CF is longer than 16 chars', done => {
      const code = CodiceFiscale.check(invalidCF.shorter);
      code.should.be.equal(false);
      done();
    });
    it('should return false if the CF not a String', done => {
      const code = CodiceFiscale.check(invalidCF.isNotString);
      code.should.be.equal(false);
      done();
    });
    it('should return false if the CF empty param', done => {
      const code = CodiceFiscale.check();
      code.should.be.equal(false);
      done();
    });
  });
  describe('CodiceFiscale::nameCode', () => {
    it('should return a valid code for names shorter than 4 digits', done => {
      const code = CodiceFiscale.nameCode('Ivo');
      code.should.be.a('string');
      code.length.should.be.equal(3);
      done();
    });
    it('should return a valid code for names longer than 4 digits', done => {
      const code = CodiceFiscale.nameCode('Massimiliano');
      code.should.be.a('string');
      code.length.should.be.equal(3);
      done();
    });
  });
  describe('CodiceFiscale::dateCode', () => {
    it('should return a valid date-code for men', done => {
      const code = CodiceFiscale.dateCode(10, 10, 10, 'M');
      code.should.be.equal('10R10');
      done();
    });
    it('should return a valid date-code having day+40 for women', done => {
      const code = CodiceFiscale.dateCode(10, 10, 10, 'F');
      code.should.be.equal('10R50');
      done();
    });
  });
  describe('CodiceFiscale::findLocationCode', () => {
    it('should return a location code if area code and location are defined', done => {
      const code = CodiceFiscale.findLocationCode('Genova', 'GE');
      code.should.be.equal('D969');
      done();
    });
    it('should return an error if a area code is invalid', done => {
      assert.throws(
        function() {
          CodiceFiscale.findLocationCode('Genova', 'XX');
        },
        Error,
        'Area code not found'
      );
      done();
    });
    it('should return an error if a location is invalid', done => {
      assert.throws(
        function() {
          CodiceFiscale.findLocationCode('Genova', 'NA');
        },
        Error,
        'Location not found'
      );
      done();
    });
  });
  describe('CodiceFiscale::getOmocodie', () => {
    it('should return an array of valid omocoie', done => {
      const omocodie = CodiceFiscale.getOmocodie(validCF.male);
      omocodie.should.be.a('array');
      omocodie.length.should.be.above(0);
      done();
    });
  });
  describe('CodiceFiscale::computeInverse', () => {
    it('should reverse a codice fiscale', done => {
      const revertedCF = CodiceFiscale.computeInverse(validCF.male);
      revertedCF.should.be.a('object');
      revertedCF.should.not.be.equal({});
      done();
    });
    it('should reverse a codice fiscale for male', done => {
      const revertedCF = CodiceFiscale.computeInverse(validCF.male);
      revertedCF.should.be.a('object');
      revertedCF.should.not.be.equal({});
      done();
    });
    it('should reverse a codice fiscale for female', done => {
      const revertedCF = CodiceFiscale.computeInverse(validCF.female);
      revertedCF.should.be.a('object');
      revertedCF.should.not.be.equal({});
      done();
    });
    it('should reverse a codice fiscale for millennial', done => {
      const revertedCF = CodiceFiscale.computeInverse(validCF.millennial);
      revertedCF.should.be.a('object');
      revertedCF.should.not.be.equal({});
      done();
    });
    it('should throw an error if the Codice Fiscale is invalid', done => {
      assert.throws(
        function() {
          CodiceFiscale.computeInverse(invalidCF.wrongCheckSum);
        },
        Error,
        'Provided input is not a valid Codice Fiscale'
      );
      done();
    });
  });
});
