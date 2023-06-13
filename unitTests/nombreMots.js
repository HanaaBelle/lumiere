function getNumberOfWords(stringInputParameter) {
    const arrayOfWords = stringInputParameter.split(" ");
    return arrayOfWords.length;
}

const firstPhrase = "bonjour à toute la promo";
const firstNumber = getNumberOfWords(firstPhrase);

// "bonjour à toute la promo" contient 5 mots.
console.log(`"${firstPhrase}" contient ${firstNumber} mots.`);

// --

const secondPhrase = "ada tech school";
const secondNumber = getNumberOfWords(secondPhrase);

// "ada tech school" contient 3 mots.
console.log(`"${secondPhrase}" contient ${secondNumber} mots.`);

module.exports = getNumberOfWords;