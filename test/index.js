const NestedStyleSheet = require('../src/rn-nested-stylesheet');
const test = require('ava');

const StyleSheet = (function() {
  let i = 0;

  return {
    create: function(ss) {
      return Object.keys(ss).map(function(key) {
        return {
          key: key,
          val: i++
        };
      }).reduce(function(sum, kv) {
        sum[kv.key] = kv.val;
        return sum;
      }, {});
    }
  };
})();

const example = {
  container: {
    flex: 1
  },
  button: {
    borderRadius: 10
  },
  text: {
    test: {
      borderRadius: 10
    }
  },
  anim: {
    transform: {
      scaleX: 1
    }
  }
};

test('should transform into a nested stylesheet tree', function(t) {
  const res = NestedStyleSheet(StyleSheet, example);

  t.deepEqual(res, {
    container: 0,
    button: 1,
    text: {
      test: 2
    },
    anim: 3
  });
});
