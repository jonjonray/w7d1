var path = require('path');

module.exports = {
  entry: "./todo_redux.jsx",
  output: {
      path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
      filename: "bundle.js"
  }

};
