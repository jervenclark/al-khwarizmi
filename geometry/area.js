'use strict';

module.exports = function() {
	return {
		quadrilateral: quadrilateral
	}
}

/**
 * [quadrilateral description]
 * @param  {numeric} a
 * @param  {numeric} b
 * @return {numeric}
 */
function quadrilateral(a, b) {
	if(isNaN(a) || isNaN(b)){
		return 0;
	} else {
		return Number(a) * Number(b);
	}
}
