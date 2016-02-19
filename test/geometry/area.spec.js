var should = require('chai').should(),
  area = require('../../geometry/area')();

describe('quadrilateral area', function(){

  it('solves 0   * 0     to  false', function() {
    area.quadrilateral(0,0).should.equal(false);
  });

  it('solves 2   * 2     to  4', function() {
    area.quadrilateral(2,2).should.equal(4);
  });

  it('solves 1.2 * 3.2   to  4.08', function() {
    area.quadrilateral(1.2,3.4).should.equal(4.08);
  });

  it('solves a   * a     to  false', function() {
    area.quadrilateral('a','g').should.equal(false);
  });

  it('solves "6" * "5"   to  30', function() {
    area.quadrilateral("6","5").should.equal(30);
  });

});

describe('triangle area', function(){

  it('solves 0   * 0     to  false', function() {
    area.triangle(0,0).should.equal(false);
  });

  it('solves 3   * 4     to  6', function() {
    area.triangle(3,4).should.equal(6);
  });

  it('solves 1.2 * 3.2   to  2.04', function() {
    area.triangle(1.2,3.4).should.equal(2.04);
  });

  it('solves a   * a     to  false', function() {
    area.triangle('a','g').should.equal(false);
  });

  it('solves "6" * "5"   to  15', function() {
    area.triangle("6","5").should.equal(15);
  });

});

describe('polygon area', function(){

  it('solves 0   * 0     to  false', function() {
    area.polygon(0,0).should.equal(false);
  });

  it('solves 10  * 5     to  172.0477', function() {
    area.polygon(10,5).should.equal(172.0477);
  });

  it('solves 6.4 * 9     to  253.2075', function() {
    area.polygon(6.4,9).should.equal(253.2075);
  });

  it('solves 6.4 * 9.5   to  false', function() {
    area.polygon(6.4,9.5).should.equal(false);
  });

  it('solves a   * a     to  false', function() {
    area.polygon('a','g').should.equal(false);
  });

  it('solves "4" * "6"   to  41.5692', function() {
    area.polygon("4","6").should.equal(41.5692);
  });

  it('solves "4" * "6.4" to  41.5692', function() {
    area.polygon("4","6.4").should.equal(false);
  });

});