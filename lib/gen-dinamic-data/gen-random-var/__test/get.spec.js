const chai = require('chai');
chai.should();

// Methods under test
const { randomArrayElement } = require('../../gen-random-var');

describe('gen-random-var/get-random-array-element', () => {
  it('picks an element from an array', done => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 9];
    const elm = randomArrayElement(arr);
    elm.should.be.a('number');
    elm.should.be.below(10);
    elm.should.be.above(0);
    done();
  });
  it('picks a random element from an array', done => {
    const arr = Array.from({ length: 40 }, () =>
      Math.floor(Math.random() * 40)
    );

    const elm1 = randomArrayElement(arr);
    const elm2 = randomArrayElement(arr);

    elm1.should.not.be.equal(elm2);

    done();
  });
});
