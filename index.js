function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function titleCase(str) {
  const words = str.split(' ');
  const titleCasedWords = words.map(word => capitalizeFirstLetter(word));
  return titleCasedWords.join(' ');
}

function titleCased() {
  const tutorials = [
    "what does the this keyword mean?",
    "What is the Constructor OO pattern?",
    "implementing Blockchain Web API",
    "The Test Driven Development Workflow",
    "What is NaN and how Can we Check for it",
    "What is the difference between stopPropagation and preventDefault?",
    "Immutable State and Pure Functions",
    "what is the difference between == and ===?",
    "what is the difference between event capturing and bubbling?",
    "what is JSONP?",
  ];

  return tutorials.map(titleCase);
}
