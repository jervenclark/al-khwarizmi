'use strict';

/**
 * Validates numeric arguments
 * @param  {array} fields
 * @return {array|false}
 */
module.exports = function numeric(fields) {
  var c = 0;
  fields.forEach(function(field, index) {
    if (isNaN(field)) {
      c++;
    } else {
      fields[index] = Number(field);
    }
  });
  return c > 0 ? false : fields;
};
