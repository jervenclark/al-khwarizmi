'use strict';

var numeric = require('../utils/numeric');

module.exports = function() {
  return {
    quadrilateral: quadrilateral,
    triangle: triangle,
    polygon: polygon
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
  var area = quadrilateral(a, b);
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
  var sides = numeric([a, b]);
  return !sides || (sides[0] + sides[1] === 0) ? false : (sides[0] * sides[1]);
}

/**
 * Returns the area of a single, convex polygon
 *
 * @param  {numeric} a
 * @param  {integer} b
 * @return {numeric}
 */
function polygon(a, b) {
  var args =  numeric([a, b]);
  if (!args || (args[1] === 0) || args[1] !== parseInt(args[1], 10)) {
    return false;
  } else {
    var area = (Math.pow(args[0], 2) * args[1]) / (4 * Math.tan(Math.PI / args[1]));
    return Number(area.toFixed(4));
  }
}
