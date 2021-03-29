/****************************************************
 * PALINDROMA
*****************************************************/

//Variabili
var word = prompt("Inserisci una parola").toLowerCase().trim();
var reverseWord = reverse(word);
console.log(word);
console.log(reverseWord);

//Check se parola è palindroma
if (word === reverseWord) {
    console.log(word + " è una parola palindroma");
} else {
    console.log(word + " non è una parola palindroma");
}

/********************************************************
 * UTILITIES
********************************************************/
/**
 * Crea una parola invertita
 * @param {string} word parola da invertire
 */
function reverse(word) {
    var reverseWord = "";
    for(var i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    return reverseWord;
}

