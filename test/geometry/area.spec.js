var should = require('chai').should(),
  area = require('../../geometry/area')();

describe('quadrilateral area', function(){

  it('solves 0*0 to 0', function() {
    area.quadrilateral(0,0).should.equal(0);
  });

  it('solves 2*2 to 4', function() {
    area.quadrilateral(2,2).should.equal(4);
  });

  it('solves 1.2*3.2 to 4.08', function() {
    area.quadrilateral(1.2,3.4).should.equal(4.08);
  });

  it('solves a*a to 0', function() {
    area.quadrilateral('a','g').should.equal(0);
  });

  it('solves "6" * "5" to 30', function() {
    area.quadrilateral("6","5").should.equal(30);
  });

});