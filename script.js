let quote, cipher, ciphertext, substitutions

letters = {
    "A": "A", "B": "B", "C": "C", "D": "D", "E": "E",
    "F": "F", "G": "G", "H": "H", "I": "I", "J": "J",
    "K": "K", "L": "L", "M": "M", "N": "N", "O": "O",
    "P": "P", "Q": "Q", "R": "R", "S": "S", "T": "T",
    "U": "U", "V": "V", "W": "W", "X": "X", "Y": "Y",
    "Z": "Z"
}

let quote = {content: "test quote", author: "Me"}

function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function resetLetters() {
  for (const key in letters) {
    letters[key] = key;
  }
}

function substitute() {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let curKey = "Z";
  let index;
  for (var i = 1; i < alphabet.length; i++) {
    index = randint(0, alphabet.length - i - 1)
    letters[curKey] = alphabet[index];
    curKey = alphabet[index]
    alphabet.push(alphabet.splice(index, 1)[0]);
  }
}

function generateCiphertext() {
  resetLetters();
  cipherText = "";
  switch(cipher) {
    case "aristocrat":
      substitute();
      for (const letter in quote) {
        cipherText.push(letters[letter.toUpperCase()]);
      }
  }
}
