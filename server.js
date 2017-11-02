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

const result = [];
findAllPermutationsAllLength('byeman').forEach(perm => {
  if (binarySearch(dictionaryAray, perm)) {
    result.push(perm);
  }
});

console.log(result);
