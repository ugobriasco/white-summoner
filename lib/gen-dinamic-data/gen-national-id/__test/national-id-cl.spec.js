const generateRUN = require('../national-id-cl');

describe('gen-national-id/national-id-cl', () => {
  it('should generate a valid RUN as String', done => {
    const id = generateRUN();
    id.should.be.a('string');
    done();
  });
  it('should start with 4 or smaller', done => {
    const digit = parseInt(generateRUN()[0]);
    digit.should.be.below(5);
    done();
  });
});
