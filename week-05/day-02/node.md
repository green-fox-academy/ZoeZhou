# React
## install and setup with webpack

- `npm init` 
- `npm install react react-dom --save`
- `npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev`
- `npm install webpack webpack-dev-server --save-dev`
- create file in root named `webpack.config.js`
- create floder structure like `/src/app/index.js` and `/src/index.html`
- add script in package.json `"start": "npm run build",
    "build": "webpack -d && webpack-dev-server --content-base src/ --inline --hot --port 8080"`
