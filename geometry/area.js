'use strict';

var numeric = require('../utils/numeric');

module.exports = function() {
  return {
    quadrilateral: quadrilateral,
    triangle: triangle
  };
};

/**
 * Returns the area of a triangle
 *
 * @param  {numeric} a
 * @param  {numeric} b
 * @return {numeric}
 */
function triangle(a, b) {
	var area = quadrilateral(a,b);
	return !area ? false : area * 0.5;
}

/**
 * Returns the area of a simple, convex quadrilateral
 *
 * @param  {numeric} a
 * @param  {numeric} b
 * @return {numeric}
 */
function quadrilateral(a, b) {
  var sides = numeric([a,b]);
	return !sides ? sides : (sides[0] * sides[1]);
}
