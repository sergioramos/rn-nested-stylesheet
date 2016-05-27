# rn-nested-stylesheet

[![](https://img.shields.io/travis/ramitos/rn-nested-stylesheet.svg)](https://travis-ci.org/ramitos/rn-nested-stylesheet) [![](https://img.shields.io/codeclimate/coverage/github/ramitos/rn-nested-stylesheet.svg)](https://codeclimate.com/github/ramitos/rn-nested-stylesheet/coverage) [![](https://img.shields.io/npm/v/rn-nested-stylesheet.svg)](https://www.npmjs.com/package/rn-nested-stylesheet) [![](https://img.shields.io/david/ramitos/rn-nested-stylesheet.svg)](https://david-dm.org/ramitos/rn-nested-stylesheet) [![](https://img.shields.io/david/dev/ramitos/rn-nested-stylesheet.svg)](https://david-dm.org/ramitos/rn-nested-stylesheet) [![](https://img.shields.io/codeclimate/github/ramitos/rn-nested-stylesheet.svg)](https://codeclimate.com/github/ramitos/rn-nested-stylesheet) [![](https://img.shields.io/npm/l/rn-nested-stylesheet.svg)](https://www.npmjs.com/package/rn-nested-stylesheet)


## install

```
λ npm install [--save/--save-dev] rn-nested-stylesheet
```

## usage

```js
const React = require('react');
const NestedStyleSheet = require('rn-nested-stylesheet');
const ReactNative = require('react-native');

const {
  StyleSheet,
  TouchableNativeFeedback,
  View,
  Text
} = ReactNative;

const styles = NestedStyleSheet(StyleSheet, {
  container: {
    flex: 1
  },
  button: {
    button: {
      borderRadius: 50
    },
    text: {
      color: 'red'
    }
  }
});

const Button = function(props) {
  return (
    <TouchableNativeFeedback>
      <View style={props.style.button}>
        <Text>props.children</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const MyComponent = function() {
  return (
    <View style={styles.container}>
      <Button style={styles.button}>My Button!</Button>
    </View>
  );
};
```

## license

MIT