const chai = require("chai");
chai.should();

// Methods under test
const { randomNumber, randomString } = require("../../gen-random-var");

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

describe("gen-random-var/gen-random-number", () => {
  it("Generates a number with given digits", done => {
    const digits = randomNumber(1);
    const number = randomNumber(digits);
    const _digitsCount = digitsCount(number);
    number.should.be.a("number");
    _digitsCount.should.be.equal(digits);
    done();
  });
  it("Generates a random number", done => {
    const n1 = randomNumber(99);
    const n2 = randomNumber(99);
    n1.should.not.be.equal(n2);
    done();
  });
});

describe("gen-random-var/gen-random-string", () => {
  it("Generates a string with given length", done => {
    const length = randomNumber(2);
    const str = randomString(length);
    str.should.be.a("string");
    str.should.have.lengthOf(length);
    done();
  });
  it("Generates a random string", done => {
    const str1 = randomString(99);
    const str2 = randomString(99);
    str1.should.not.be.equal(str2);
    done();
  });
});
