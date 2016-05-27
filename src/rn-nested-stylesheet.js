const reduce = require('lodash.reduce');
const map = require('lodash.map');
const isPlainObject = require('lodash.isplainobject');
const some = require('lodash.some');


const _reduce = function(sum, item) {
  sum[item.key] = (function() {
    if (item.nested) {
      return transform(item.StyleSheet, item.val);
    }

    return item.StyleSheet.create(item.val)
  })();

  return sum;
};

const _map = function(StyleSheet) {
  return function(val, key) {
    return {
      StyleSheet,
      nested: some(val, isPlainObject),
      key,
      val
    };
  };
};

const transform = function(StyleSheet, styles) {
  return reduce(map(styles, _map(StyleSheet)), _reduce, {});
};

module.exports = transform;