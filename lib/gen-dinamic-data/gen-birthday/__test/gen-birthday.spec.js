const chai = require('chai');
chai.should();

const { genBirthday } = require('../../gen-birthday');

describe('gen-birthday', () => {
  it('should generate a valid date', () => {
    const bday = genBirthday();
    bday.should.be.below(new Date());
  });
});
//
// describe('random-birthday: ', function() {
//   it('common', function() {
//     var count = 100;
//
//     while (count--) {
//       var ret1 = randomBirthday();
//       var ret2 = randomBirthday({ min: 1980, max: 2000 });
//
//       expect(ret1.getFullYear()).to.be.within(1896, 2015);
//       expect(ret2.getFullYear()).to.be.within(1980, 2000);
//     }
//   });
// });
