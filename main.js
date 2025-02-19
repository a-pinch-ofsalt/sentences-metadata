let inputString = 'an am be me he.';

let numOfSentences = 0;
let numOfVowels = 0;
let numOfConsonants = 0;
let longestWord = {word: '', length: 0};
let shortestWord = {word: 0, length: Infinity};
let savedWords = [];

let currentWord = '';
let currentNumOfVowels = 0;
let currentNumOfConsonants = 0;

for (let index = 0; index < inputString.length; index++) {
    const currentChar = inputString[index];
    if (currentChar == ' ' || currentChar == '.' || index == inputString.length - 1) {
        let wordIsDuplicate = false;
        
        if (!(currentChar == ' ')) {
            numOfSentences++;
        }
        for (const savedWord of savedWords) {
            
            // console.log(savedWord);
            if (savedWord['word'] == currentWord) {
                wordIsDuplicate = true;
                currentNumOfVowels = savedWord['numOfVowels'];
                currentNumOfConsonants = savedWord['numOfConsonants'];
                savedWord['count']++;
            }
        }
        
        if (!wordIsDuplicate) {
            savedWords.push({word: currentWord,
                numOfVowels: currentNumOfVowels,
                numOfConsonants: currentNumOfConsonants,
                length: currentWord.length,
                count: 1
            });
            numOfVowels += currentNumOfVowels;
            numOfConsonants += currentNumOfConsonants;

            if (currentWord.length > longestWord['length']) {
                longestWord = {word: currentWord, length: currentWord.length};
            } else if (currentWord.length < shortestWord['length']){
                shortestWord = {word: currentWord, length: currentWord.length};
            }
        }

        

        currentWord = '';
        currentNumOfVowels = 0;
        currentNumOfConsonants = 0;
    } else {
        switch (currentChar) {
            case ('a'):
                currentNumOfVowels++; break;
            case ('e'):
                currentNumOfVowels++; break;
            case ('i'):
                currentNumOfVowels++; break;
            case ('o'):
                currentNumOfVowels++; break;
            case ('u'):
                currentNumOfVowels++; break;
            default:
                currentNumOfConsonants++;
        }

        currentWord += currentChar;
    }
}

const output = {
    words: savedWords,
    numOfSentences: numOfSentences,
    numOfConsonants: numOfConsonants,
    numOfVowels: numOfVowels,
    longestWord: longestWord,
    shortestWord: shortestWord,
};

console.log(output);