const generateRUT = require('../crn-cl');

describe('CL generateRUT', () => {
  it('should generate a RUT as String', done => {
    const id = generateRUT();
    id.should.be.a('string');
    done();
  });
  it('should start with 5 or greather', done => {
    const digit = parseInt(generateRUT()[0]);
    digit.should.be.above(4);
    done();
  });
});
