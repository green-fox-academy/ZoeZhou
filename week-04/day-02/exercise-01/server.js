'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var jsonParser = bodyParser.json();

app.use('/assets', express.static('assets'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', function (req, res) {
  var obj = {};
  if (req.query.input !== 'undefined') {
    var result = 2 * req.query.input;
    obj = {
      'received': parseInt(req.query.input),
      'result': parseInt(result)
    };
  } else {
    obj = {
      'error': 'please provide an input!!'
    }
  }
  res.send(obj);
});

app.get('/greeter', function (req, res) {
  var name = req.query.name;
  var title = req.query.title;
  var obj = {};
  if (!name || !title) {
    obj = {
      'error': 'Please provide a name!'
    };
  } else {
    obj = {
      'welcome_message': `Oh, hi there ${name}, my dear ${title}!`
    };
  }
  res.send(obj);
});

app.get('/appenda/:appendable', function (req, res) {
  var obj = {};
  if (!req.params.appendable) {
    // res.sendStatus(404);
    res.status(404);
    res.location('/appenda');
    // res.sendFile(__dirname + '/404.html');
  } else {
    obj = {
      'appended': `${req.params.appendable + 'a'}`
    };
  }
  res.send(obj);
});

app.get('/appenda', function (req, res) {
  res.sendFile(__dirname + '/404.html');
})

app.post('/dountil/:symbol', jsonParser, function (req, res) {
  var obj = {};
  if (!req.params.symbol) {
    obj = {
      'error': 'Please provide a number!'
    };
  } else {
    if (req.params.symbol === 'sum') {
      var result = countSum(req.body.until);
      obj = {
        'result': parseInt(result)
      };
    }
    if (req.params.symbol === 'factor') {
      var result = countFactor(req.body.until);
      obj = {
        'result': parseInt(result)
      };
    }
  }
  res.send(obj);
});

app.post('/arrays', jsonParser, function (req, res) {
  var obj = {};
  var result;
  var type = req.body.what;
  var numbers = req.body.numbers;
  if (type === 'sum') {
    result = countSumArray(numbers);
  }
  else if (type === 'multiply') {
    result = countMultiply(numbers);
  }
  else if (type === 'double') {
    result = countDouble(numbers);
  }
  else {
    obj = {
      'error': 'Please provide a number!'
    };
    res.send(obj);
  }
  obj = {
    'result': result
  };
  res.send(obj);
})

app.post('/sith', jsonParser, function (req, res) {
  var text = req.body.text;
  var obj = {};
  var sithText = '';
  if (text.length <= 0) {
    obj = {
      'error': 'Feed me some text you have to, padawan young you are. Hmmm.'
    };
    res.send(obj);
  }
  else {
    sithText = calcSith(text);
  }
  obj = {
    "sith_text": sithText
  };
  res.send(obj);
})

function countSum(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
function countFactor(n) {
  var sum = 1;
  for (var i = 2; i <= n; i++) {
    sum *= i;
  }
  return sum;
}
function countSumArray(arr) {
  var sum = 0;
  arr.forEach(function (value) {
    sum += value;
  })
  return sum;
}
function countMultiply(arr) {
  var sum = 1;
  arr.forEach(function (value) {
    sum *= value;
  })
  return sum;
}
function countDouble(arr) {
  arr.forEach(function (value, index) {
    arr[index] = value * 2;
  })
  return arr;
}
function calcSith(str) {
  var randomWord = [
    ' Arrgh.',
    ' Uhmm.',
    ' Err.',
    ' err.'
  ];
  var numOfRandon;
  var result = '';
  var sentenceList = str.split('. ');
  var wordList = [];
  sentenceList.forEach(function (value, index) {
    if (!wordList[index]) {
      wordList[index] = [];
    }
    wordList[index] = value.split(' ');
  })
  wordList.forEach(function (value, index) {
    var temp;
    value[value.length - 1] = value[value.length - 1].replace('.', '');
    for (var i = 0; i < value.length - 1; i=i+2) {
      //lowercase second and uppercase first
      if(i===0) {
        value[i] = value[i].toLowerCase();
        value[i+1] = (value[i+1][0].toUpperCase() +value[i+1].substr(1))
      }
      temp = value[i];
      value[i] = value[i+1];
      value[i+1] = temp;
    }
  })
  for(var i = 0; i < wordList.length; i++) {
    numOfRandon = Math.round(Math.random())===0?1:2;
    var randon;
    if(i === wordList.length - 1) {
      result += wordList[i].join(' ') + '.';
      for(var k = 1; k<=numOfRandon; k++) {
        randon = Math.floor(Math.random()*(3+1));
        result += randomWord[randon];
      }
    } else {
      result += wordList[i].join(' ');
      for(var j = 1; j<= numOfRandon; j++) {
        randon = Math.floor(Math.random()*(3+1));
        if (j === numOfRandon) {
          result += randomWord[randon] + ' ';
        } else {
          result += randomWord[randon];
        }
      }
    }
  }
  result = result.trim();
  return result;
}
console.log(calcSith("This is my example sentence. Just for fun."));
console.log('listening port:8080');
app.listen(8080);