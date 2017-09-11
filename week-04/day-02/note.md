# REST Backend

## Creating a Server
```javascript
var http = require('http');
var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello NodeJs');
});

server.listen(3000);
console.log('listening to port:3000');
```

## Serving JSON Data
```javascript
res.writeHead(200, {'Content-Type': 'application/json'});
res.end(JSON.stringify(data));
```

## Node Package Manager(NPM)

## package.json File
`npm install` will install the dependencies in package.json file

## Express
- how to use it?
```javascript
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello, Express.');
});
app.listen(3000);
```

- Route Params
```javascript
app.get('/profile/:id', function(req, res){
  res.send('your requesed id:' + req.params.id);
});
```

- Middleware & Static Files
  - Middleware: codes run between the request and response
  ```javascript
  app.use('/', function(req, res, next){
    console.log(req.url);
    next();
  });
  app.use('/', express.static('folder/file'));
  ```

- Query Strings
  
  `req.query`  
  `res.render('page', {name: req.query})`

- Handing POST Requsets
  `npm install body-parser -save`  
  ```javascript
  var bodyParser = require('body-parser');
  var urlencodedParser = bodyParser.urlencoded({ extended: false });

  app.post('/contact', urlencodedParser, function (req, res) {
  console.log(req.body);
  res.render('page', {name: req.body});
  });
  ```

### Postman
