const reduce = require('lodash.reduce');
const map = require('lodash.map');
const isPlainObject = require('lodash.isplainobject');
const some = require('lodash.some');

const nestedAttrs = [
  'transform'
];

const _reduce = function(sum, item) {
  sum[item.key] = (function() {
    if (item.nested) {
      return transform(item.StyleSheet, item.val);
    }

    return item.StyleSheet.create({
      [item.key]: item.val
    })[item.key];
  })();

  return sum;
};

const _isNested = function(val, key) {
  return isPlainObject(val) && (nestedAttrs.indexOf(key) < 0);
};

const _map = function(StyleSheet) {
  return function(val, key) {
    return {
      StyleSheet,
      nested: some(val, _isNested),
      key,
      val
    };
  };
};

const transform = function(StyleSheet, styles) {
  return reduce(map(styles, _map(StyleSheet)), _reduce, {});
};

module.exports = transform;
