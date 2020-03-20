const chai = require('chai');
chai.should();

const { genBirthday, randomBirthday } = require('../../gen-birthday');

describe('gen-birthday', () => {
  it('should generate a valid date', () => {
    const bday = genBirthday();
    bday.should.be.below(new Date());
  });
  it('should generate not equal birthdays', () => {
    const bday1 = genBirthday();
    const bday2 = genBirthday();
    bday1.should.not.be.equal(bday2);
  });
  describe('gen-birthday::randomBirthday', () => {
    it('should generate a valid birthday betwen 0 and 99 years', done => {
      const max = new Date().getFullYear();
      const min = new Date().getFullYear() - 12;
      const bday = randomBirthday({ type: 'child' });
      bday.getFullYear().should.be.within(min, max);
      done();
    });
    it('should generate a valid birthday for child (0-12)', done => {
      const max = new Date().getFullYear();
      const min = new Date().getFullYear() - 12;
      const bday = randomBirthday({ type: 'child' });
      bday.getFullYear().should.be.within(min, max);
      done();
    });
    it('should generate a valid birthday for teen (13-17)', done => {
      const max = new Date().getFullYear() - 13;
      const min = new Date().getFullYear() - 17;
      const bday = randomBirthday({ type: 'teen' });
      bday.getFullYear().should.be.within(min, max);
      done();
    });
    it('should generate a valid birthday for adult (18-64)', done => {
      const max = new Date().getFullYear() - 18;
      const min = new Date().getFullYear() - 64;
      const bday = randomBirthday({ type: 'adult' });
      bday.getFullYear().should.be.within(min, max);
      done();
    });
    it('should generate a valid birthday for senior (64-99)', done => {
      const max = new Date().getFullYear() - 65;
      const min = new Date().getFullYear() - 99;
      const bday = randomBirthday({ type: 'senior' });
      bday.getFullYear().should.be.within(min, max);
      done();
    });
  });
});
