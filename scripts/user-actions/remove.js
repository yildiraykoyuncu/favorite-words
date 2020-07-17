'use strict';
console.log('--- loading: remove.js', words);

const removeHandler = () => {
  debugger;
  const userInput = prompt('enter a word to remove:');
  if (!userInput) {
    return;
  }

  const isUserInput = (entry) => {
    return entry === userInput;
  };
  const inputIsInArray = words
    .find(isUserInput);

  if (inputIsInArray) {
    const isNotUserInput = (entry) => {
      return entry !== userInput;
    };
    words = words.filter(isNotUserInput);
    
    displayHandler(`"${userInput}" has been removed:`);
  } else {
    alert(`"${userInput}" does not exist`)
  }
};
