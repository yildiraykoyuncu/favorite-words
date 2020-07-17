'use strict';

/* console.log('--- loading: add-word.js');

const addWordHandler = () => {
  debugger;
  const userInput = prompt('');
  if (_) {
    return;
  }

  words._(_);
  const newMessage = ``;
  displayHandler(newMessage);
}; */

'use strict';
console.log('--- loading: add-word.js');

const addWordHandler = () => {
  debugger;
  const userInput = prompt('add a new word:');
  if (userInput === null) {
    return;
  } else {
    words.push(userInput);
    const newMessage = `"${userInput}" has been added:\n`;
    displayHandler(newMessage);
  }
};
