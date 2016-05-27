const test = require('ava');
const NestedStyleSheet = require('../');

const StyleSheet = (function() {
  let i = 0;

  return {
    create: function() {
      return i++;
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
  }
};

test('should transform into a nested stylesheet tree', function(t) {
  const res = NestedStyleSheet(StyleSheet, example);

  t.deepEqual(res, {
    container: 0,
    button: 1,
    text: {
      test: 2
    }
  });
});
