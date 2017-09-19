```javascript
npm init
npm install webpack --save-dev

webpack script-1.js ./bundle.js

```

- webpack.config.js
```javascript
module.exports = { 
  //define entry point
  entry: './src/script-1.js',

  //define out point
  output:{
    path: 'dist',
    filename: 'bundle.js'
  }
};
```
- Babel Loaders
```javascript
  npm install babel-core babel-loader babel-preset-es2015 --save-dev

  module.exports = { 
  //define entry point
  entry: './src/script-1.js',

  //define out point
  output:{
    path: 'dist',
    filename: 'bundle.js'
  },

  module:{
    loaders: [
      {
        test:/\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
```
- CSS Loaders
```javascript
  npm install style-loader css-loader --save-dev

  module:{
    loaders: [
      {
        test:/\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        //use both of them: !
        loader: 'style-loader!css-loader'
      }
    ]
  }
```
- SASS Loaders
```javascript
  npm install node-sass sass-loader --save-dev

  module:{
    loaders: [
      {
        test:/\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        //use both of them: !
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
```