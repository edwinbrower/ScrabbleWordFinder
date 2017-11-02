const input = document.querySelector('form');

const processInputWord = e => {
  e.preventDefault();
  const word = e.path[0][0].value;
  if (!word.length) {
    window.alert('Enter up to 7 letters');
  } else if (word.length > 7) {
    window.alert(`Enter no more than 7 letters! Your input '${word}' contains ${word.length} letters!`);
  } else {
    console.log(word);
    // POST to server
    // add words to page 
  }
};

input.addEventListener('submit', processInputWord);
