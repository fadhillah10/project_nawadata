function sortCharacters(inputString) {
    const vowels = "aeiou";
    let vowelChars = [];
    let consonantChars = [];

    const lowercasedString = inputString.toLowerCase();

    for (const char of lowercasedString) {
        if (char >= 'a' && char <= 'z') {
            if (vowels.includes(char)) {
                vowelChars.push(char);
            } else {
                consonantChars.push(char);
            }
        }
    }

    return {
        vowels: vowelChars.join(''),
        consonants: consonantChars.join('')
    };
}

// Test Case 1
const input1 = "Sample Case";
const result1 = sortCharacters(input1);
console.log("Input:", input1);
console.log("Vowel Characters:", result1.vowels);
console.log("Consonant Characters:", result1.consonants);
console.log("---");

// Test Case 2
const input2 = "Next Case";
const result2 = sortCharacters(input2);
console.log("Input:", input2);
console.log("Vowel Characters:", result2.vowels);
console.log("Consonant Characters:", result2.consonants);
console.log("---");
