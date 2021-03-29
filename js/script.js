// /****************************************************
//  * PALINDROMA
// *****************************************************/

// //Variabili
// var word = prompt("Inserisci una parola").toLowerCase().trim();
// var reverseWord = reverse(word);
// console.log(word);
// console.log(reverseWord);

// //Check se parola è palindroma
// if (word === reverseWord) {
//     console.log(word + " è una parola palindroma");
// } else {
//     console.log(word + " non è una parola palindroma");
// }

// /********************************************************
//  * UTILITIES
// ********************************************************/
// /**
//  * Crea una parola invertita
//  * @param {string} word parola da invertire
//  */
// function reverse(word) {
//     var reverseWord = "";
//     for(var i = word.length - 1; i >= 0; i--) {
//         reverseWord += word[i];
//     }
//     return reverseWord;
// }

/****************************************************
 * PARI O DISPARI
*****************************************************/

//Variabili
var choice = prompt("Fai la tua scelta:\nPari\nDispari").toLocaleLowerCase().trim();
//Validazione choice
while (choice !== "pari" && choice !== "dispari") {
    choice = prompt("Valore non valido:\nFai la tua scelta:\nPari\nDispari").toLocaleLowerCase().trim();
}

var userNumber = parseInt( prompt("Scegli un numero da 1 a 5") );
//Validazione userNumber
while (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {
    userNumber = parseInt( prompt("Valore non valido.\nScegli un numero da 1 a 5") );
}

var botNumber = randomNumber(1, 5);

var somma = userNumber + botNumber;

var risultato = pariDispari(somma);

//Output
console.log("Il tuo numero è: " + userNumber);
console.log("Il numero del computer è: " + botNumber);
console.log("La somma è: " + somma + " ed è un numero " + risultato);

if(risultato === choice) {
    console.log("HAI VINTO!!!!");
} else {
    console.log("Hai perso :(");
}


/********************************************************
 * UTILITIES
********************************************************/
/**
 * Dare un numero random tra min e max
 * @param {number} min il numero minimo che deve risultare
 * @param {number} max il numero massimo che deve risultare
 */
function randomNumber(min, max) {
    var number = Math.floor( Math.random() * (max - min + 1) + 1);
    return number;
}

/**
 * Definire se un numero è pari o dispari
 * @param {number} num inserire il numero da analizzare 
 */
function pariDispari(num) {
    var risultato;
    if (num % 2 === 0) {
        risultato = "pari";
    } else {
        risultato = "dispari";
    }
    return risultato;
}