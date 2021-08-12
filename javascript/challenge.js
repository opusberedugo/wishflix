const findtheLongestWord = (word) => {
  let spacesIndexses = [];
  let lengths = []

  for (let i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      spacesIndexses[spacesIndexses.length] = i;
    }
  }

  for (let i = 0; i < spacesIndexses.length; i++) {
    if (i === 0) {
      let wordcount = spacesIndexses[i] - 1;
      lengths[lengths.length] = wordcount;
      delete wordcount;
    } else {
      let wordcount = spacesIndexses[i] - spacesIndexses[i - 1] - 1
      lengths[lengths.length] = wordcount;
      delete wordcount;
    }

  }
  let greatest = 0;

  for (let i = 0; i < lengths.length; i++) {
    if (lengths[i] > lengths[i + 1]) {
      greatest = i;
    }
  }



  return lengths;

}
console.log(findtheLongestWord("cinfores is a relatively quality"));