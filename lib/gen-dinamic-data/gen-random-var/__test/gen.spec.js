const chai = require('chai');
chai.should();

// Methods under test
const {
  randomNumber,
  randomString,
  openRangedRandomNumber
} = require('../../gen-random-var');

//counting digit of a number
function digitsCount(n) {
  var count = 0;
  if (n >= 1) ++count;

  while (n / 10 >= 1) {
    n /= 10;
    ++count;
  }
  return count;
}

describe('gen-random-var/gen-random-number', () => {
  it('Generates a number with given digits', done => {
    const digits = randomNumber(1);
    const number = randomNumber(digits);
    const _digitsCount = digitsCount(number);
    number.should.be.a('number');
    _digitsCount.should.be.equal(digits);
    done();
  });
  it('Generates a random number', done => {
    const n1 = randomNumber(99);
    const n2 = randomNumber(99);
    n1.should.not.be.equal(n2);
    done();
  });
});

describe('gen-random-var/openRangedRandomNumber', () => {
  it('should generate a number', done => {
    const val = openRangedRandomNumber(1, 5);
    val.should.be.a('number');
    done();
  });
  it('should generate a random number in an open interval between 0 and 4', done => {
    const val = openRangedRandomNumber(0, 4);
    val.should.be.below(5);
    val.should.be.above(-1);
    done();
  });
  it('should generate a random number in an open interval between 5 and 9', done => {
    const val = openRangedRandomNumber(5, 9);
    val.should.be.below(10);
    val.should.be.above(4);
    done();
  });
});

describe('gen-random-var/gen-random-string', () => {
  it('Generates a string with given length', done => {
    const length = randomNumber(2);
    const str = randomString(length);
    str.should.be.a('string');
    str.should.have.lengthOf(length);
    done();
  });
  it('Generates a random string', done => {
    const str1 = randomString(99);
    const str2 = randomString(99);
    str1.should.not.be.equal(str2);
    done();
  });
});
