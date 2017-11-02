const input = document.querySelector('form');

const fakeData = ['bcd', 'ok', 'my']; //using this before fs to read txt file

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

function findWords(string) {
  // find all permutations 
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
}

function processInputWord(e) {
   e.preventDefault();
   const word = e.path[0][0].value;
  if(word.length !== 7) {
    window.alert(`Enter a word with exactly 7 letters! Your input '${word}' contains only ${word.length} letters!`);
  } else{
   const result = [];
   findWords(word).forEach(perm => {
   if (binarySearch(dictionaryAray, perm)) {
    result.push(perm);
     console.log(result);
  }
   }); 
  }
}

input.addEventListener('submit', processInputWord);
