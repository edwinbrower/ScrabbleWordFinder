const input = document.querySelector('form');
const results = document.querySelector('.results');

const processInputWord = e => {
  e.preventDefault();
  const word = e.path[0][0].value;
  if (!word.length) {
    window.alert('Enter up to 7 letters');
  } else if (word.length > 7) {
    window.alert(`Enter no more than 7 letters! Your input '${word}' contains ${word.length} letters!`);
  } else {
    console.log(word);
    $.ajax({
      url: '/permutations', 
      type: 'POST',
      data: word,
      success: (data) => {
        console.log('success', data);
        results.innerHTML = `<h6>There are ${data.length} valid words.</h6>`;
        data.forEach(word => {
          let item = document.createElement('P');
          let text = document.createTextNode(word);
          item.appendChild(text);
          results.appendChild(item);
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
};

input.addEventListener('submit', processInputWord);
