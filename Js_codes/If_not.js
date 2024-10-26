let words = ["apple", "ant", "banana", "berry", "cherry", "date"];
let groupedWords = [];

for (let word of words) {
    let firstLetter = word[0]; // Get the first letter of the word
    if (!groupedWords[firstLetter]) { // Check if the key doesn't exist
        groupedWords[firstLetter] = []; // Create an empty array for this key
    }
    groupedWords[firstLetter].push(word); // Add the word to the array
}

// console.log(groupedWords);

let colors = ['red', 'blue', 'green', 'yellow', 'black'];
let groupedColors = {};
let count=0;
colors.forEach(element => {
    
    let firstLetter = element[0];
    if (!groupedColors[firstLetter]) {
        groupedColors[firstLetter] = [];
    }
    groupedColors[firstLetter].push(element);
    count+=1;
    console.log(count+": " + groupedColors[firstLetter]);
});

consol
e.log(groupedColors);

