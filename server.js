const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'src')));

const fs = require('fs');
const dictionary = fs.readFileSync('./dictionary.txt', 'utf-8');
const dictionaryAray = dictionary.split('\n');

const binarySearch = (array, target, start = 0, end = array.length) => {
  
  if (start === end) {
    return null;
  }

  let midIndex = Math.floor((end - start) / 2) + start;

  if (array[midIndex] === target) {
    return midIndex;
  } else if (start === midIndex) {
    return binarySearch(array, target, start + 1, end);
  } else if (target > array[midIndex]) {
    return binarySearch(array, target, midIndex, end);
  } else {
    return binarySearch(array, target, start, midIndex);
  }
};

const findAllPermutationsAllLength = string => {
  const result = {};
  string = string.toUpperCase();
  const recurse = (stringSoFar, stringLeft) => {
    if (!stringLeft.length) {
      result[stringSoFar] = true;
      return;
    }
    for (let i = 0; i < stringLeft.length; i++) {
      recurse(stringSoFar + stringLeft[i], stringLeft.slice(0, i) + stringLeft.slice(i + 1));
      result[stringSoFar] = true;    
    }
  };
  recurse('', string);
  return Object.keys(result);  
};

// const result = [];
// findAllPermutationsAllLength('byeman').forEach(perm => {
//   if (binarySearch(dictionaryAray, perm)) {
//     result.push(perm);
//   }
// });

// console.log(result);

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.post('/permutations', function(req, res) {
  const result = [];
  // findAllPermutationsAllLength('byeman').forEach(perm => {
  //   if (binarySearch(dictionaryAray, perm)) {
  //     result.push(perm);
  //   }
  // });
  console.log('posted');
});

app.listen(3001, function() {
  console.log('listening on port 3001!');
});
