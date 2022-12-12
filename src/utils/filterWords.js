export const filterWords = (word, letters) => {
  if (word.toLowerCase().indexOf(letters.toLowerCase()) === -1) {
    return false;
  } else {
    return true;
  }
};
