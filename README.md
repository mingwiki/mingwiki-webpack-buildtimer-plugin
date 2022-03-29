# mingwiki-webpack-buildtimer-plugin


```js
const path = require('path')
const timer = require('mingwiki-webpack-buildtimer-plugin')
module.exports = {
  entry: {
    // index: "./test.js"
  },
  output: {
    path: path.resolve(__dirname, './dist'),
  },

  module: {
    rules: [
    ]
  },
  plugins: [
    new timer()
  ]
}
```