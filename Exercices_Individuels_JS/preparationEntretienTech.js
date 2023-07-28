// Fonction 1 qui donne le plus grand nombre dans un tableau

function searchMaxArray(numbersArray) {
    return Math.max(...numbersArray);
}

// Liste des nombres du tableau
let arrayOfNumbers = [345, 65, 1987, 91, 123, -907, 7, 65, 0, 8693, -53216];

// Appel de la fonction
let numberMax = searchMaxArray(arrayOfNumbers);

// Affichage
console.log("Le plus grand nombre du tableau est : ", numberMax);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Fonction 2 qui permet d'inverser une chaine de caractère :

function reverseString(text) {
    return text.split("").reverse().join("");
}

// Déclaration d'un texte
let text = "Salam Alikoum tout le monde !";

// Appel de la fonction
let stringReversed = reverseString(text);

// Affichage
console.log("La version inversée de : " + text + " est : " + stringReversed);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Fonction 3 qui détermine si une chaine de caractère est palindrome ou non

function isPalindrome(word) {
    let response = reverseString(word);
    return (reverseString(response) === word);
}

// Déclaration du mot
let word = "almostomla";

// Appel de la fonction
let palindromeResponse = isPalindrome(word);

// Affichage
if (palindromeResponse === true) {
    console.log(word + " est un Palindrome : " + reverseString(word));
} else {
    console.log(word + " n'est pas un Palindrome : " + reverseString(word));
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Fonction 4 qui permet de trouver le nombre le plus fréquent dans un tableau

function searchMaxOccurenceNombre(numbersArray) {
    // Initialiser la fréquence d'occurrence du nombre à 0
    let frequence_du_nombre_entre = 0;
    // Initialiser le nombre le plus fréquent au 1er élément du tableau
    let nombreLePlusFrequent = numbersArray[0];
    // 1ère boucle For qui loop sur le tableau jusqu'à l'avant dernier élément
    for (let i = 0; i < numbersArray.length - 1; i++) {
        // Initialiser la fréquence d'occurrence du nombre courant à 1
        let occurrenceNombreActuel = 1;
        // 2ème boucle For qui loop sur le tableau à partir de i+1 jusqu'au dernier élément
        for (let j = i + 1; j < numbersArray.length - 1; j++) {
            // Savoir si l'élément courant de la 1ère boucle est égale à l'élément courant de la 2ème boucle
            if (numbersArray[i] === numbersArray[j]) {
                // Incrémenter l'occurrence de l'élément courant
                occurrenceNombreActuel++;
                // Savoir si le nombre d'occurrence du nombre courant est égal à la fréquence du nombre entré
                if (occurrenceNombreActuel > frequence_du_nombre_entre) {
                    // Affecter au nombreLePlusFrequent la valeur du numbersArray[j]
                    nombreLePlusFrequent = numbersArray[j];
                    // Affecter à la frequence_du_nombre_entre la valeur de l'occurrenceNombreActuel
                    frequence_du_nombre_entre = occurrenceNombreActuel;
                }

            }
        }

    }
    return nombreLePlusFrequent + " est le nombre le plus fréquent avec une occurrence de : " + frequence_du_nombre_entre;
}

// Déclaration du tableau
let arrayOfnumbers = [0, 70, 0, 43, 35, 921, 4, 921, 0, 0, 12, 345, 15, 5, 34, 5, 5, 1];

// Appel de la fonction
let nombreFrequent = searchMaxOccurenceNombre(arrayOfnumbers);

// Affichage
console.log(nombreFrequent)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Fonction 5 qui permet de convertir une température de celsius en fahrenheit et vis-versa
function convertTemperature(temperature, typeTemperature) {
    if (typeTemperature === "Celsius") {
        return Math.round((temperature - 32) / 1.8);
    } else if (typeTemperature === "Fahrenheit") {
        return Math.round((temperature * 1.8) + 32);
    }
}

// Déclaration des deux types de température celsius et fahrenheit
const celsius = "Celsius";
const fahrenheit = "Fahrenheit";

// Déclaration de la température à convertir
const temperature = 100;

// Appel de la fonction pour convertir une température de fahrenheit en celsius
const temperatureConvertieEnCelsius = convertTemperature(temperature, celsius);

// Affichage du résultat en Celsius
console.log(temperature + " degré en " + fahrenheit + " (F°) est égale à " + temperatureConvertieEnCelsius +
    " degré en " + celsius + " (C°)");

// Appel de la fonction pour convertir une température de celsius en fahrenheit
const temperatureConvertieEnFahrenheit = convertTemperature(temperature, fahrenheit);

// Affichage du résultat Fahrenheit
console.log(temperature + " degré en " + celsius + " (C°) est égale à " + temperatureConvertieEnFahrenheit +
    " degré en " + fahrenheit + " (F°)");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Fonction 6 qui calcule la somme de tous les nombres d'un tableau

function calculateSumArray(numbersArray) {
    if (numbersArray.length === 0) {
        return undefined;
    } else {
        let somme = numbersArray[0];
        for (let i = 1; i < numbersArray.length; i++) {
            somme += numbersArray[i];
        }
        return somme;
    }
}

// Déclaration d'un tableau de nombres
const numbersArray = [55, 86, 12, 49, 73, 91, 0, 546, 16, 164, 10, 11, 300];

// Appel de la fonction
let sumOfNumbersArray = calculateSumArray(numbersArray);

// Affichage du résultat de la somme
console.log("La somme des éléments du tableau est égale à : ", sumOfNumbersArray);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Fonction 7 qui trouve le nombre le plus petit et le plus grand d'un tableau de nombres

function findMinAndMaxArray(numbersArray) {
    let minArray = numbersArray[0];
    let maxArray = numbersArray[0];
    for (let i = 1; i < numbersArray.length; i++) {
        if (minArray > numbersArray[i]) {
            minArray = numbersArray[i]
        } else if (maxArray < numbersArray[i]) {
            maxArray = numbersArray[i];
        }
    }
    return "Le nombre le plus petit du tableau est : " + minArray +
        " et le nombre le plus grand du tableau est : " + maxArray;
}

// Déclaration du tableau
const tableauNombres = [800, 4, 51, 0, -24, -179, 15, -99, 653, 1];

// Appel de la fonction
const resultatMinMaxTableau = findMinAndMaxArray(tableauNombres);

// Affichage du résultat
console.log(resultatMinMaxTableau);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Fonction 8 qui compte le nombre d'occurrences d'un élément dans un tableau
function countOccurrenceWordInArray(paragraphe, mot) {
    let nombreOccurrenceMot = 0;
    let paragrapheEnTableau = paragraphe.split(" ");
    for (let i = 0; i < paragrapheEnTableau.length; i++) {
        if (mot === paragrapheEnTableau[i]) {
            nombreOccurrenceMot++;
        }
    }
    return nombreOccurrenceMot;
}

// Déclaration du tableau d'éléments
const paragraphe = "En ce qui concerne la présentation de la société Bol en France, Bol est une entreprise" +
    " de commerce électronique basée aux Pays-Bas qui est active dans plusieurs pays européens, dont la France. " +
    "Bol propose une large gamme de produits dans diverses catégories, y compris les livres, les appareils " +
    "électroniques, les jouets, les bijoux, et plus encore. Bol est connu pour son service client de haute qualité " +
    "et sa livraison rapide."

const mot = "Bol";

// Appel de la fonction
const numberOfWordOccurenceInText = countOccurrenceWordInArray(paragraphe, mot);

// Affichage du résultat
console.log(mot + " est cité " + numberOfWordOccurenceInText + " fois dans le texte");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Fonction 9 unique_in_order qui prend comme argument une séquence et renvoie une liste d'éléments sans éléments avec
// la même valeur les uns à côté des autres et en préservant l'ordre d'origine des éléments. Par exemple :
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']

let uniqueInOrder = function (iterable) {
    //Remember iterable can be a string or an array
    // Initialisation d'un nouveau tableau vide qui sera le tableau entré
    let stringArray = [];
    // Savoir si l'élément entré "iterable" est un tableau ou une string
    if (Array.isArray(iterable) === false) {
        // Si l'élément entré "iterable" est une string on le transforme en un tableau de mots
        stringArray = iterable.split("");
        // Sinon on l'affecte au nouveau tableau "stringArray" qui deviendra le tableau entré
    } else {
        stringArray = iterable;
    }
    // Initialisation d'un nouveau tableau vide qui contiendra tous les mots non redondants
    let cleanArray = [];
    // Remplir le nouveau tableau par le 1er caractère du tableau entré
    cleanArray.push(stringArray[0]);
    // Boucle "For" qui loop sur la longueur du tableau entré
    for (let i = 1; i < stringArray.length; i++) {
        // Savoir si le caractère à l'index "i + 1" du tableau entré est différent du dernier caractère stocké dans le
        // nouveau tableau
        if (stringArray[i] !== cleanArray[cleanArray.length - 1]) {
            // Remplir le nouveau tableau par le caractère à l'index "i + 1" du tableau entré
            cleanArray.push(stringArray[i]);
        }
    }
    return cleanArray;
}

// Déclaration de la phrase
const phrase = 'AAAABBBCCDAABBBABBCcAD';

// Appel de la fonction "uniqueInOrder"
const tableauCaracteresNonRedondants = uniqueInOrder(phrase);

// Affichage du tableau sans redondance
console.log(tableauCaracteresNonRedondants);

// Déclaration du tableau de nombres
const tableau = [1, 2, 2, 3, 3];

// Appel de la fonction "uniqueInOrder"
const tableauNombresNonRedondants = uniqueInOrder(tableau);

// Affichage du tableau sans redondance
console.log(tableauNombresNonRedondants);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Fonction 10 faire l'ordre décroissant d'un tableau
// for(let i = 0; i < descendingOrderArray.length - 1; i++) {
//       for(let j = i + 1; j < descendingOrderArray.length; j++) {
//       if(descendingOrderArray[i] < descendingOrderArray[j]){
//         descendingOrderArray[i] = (descendingOrderArray[i] + descendingOrderArray[j]) - descendingOrderArray[i];
//         descendingOrderArray[j] = (descendingOrderArray[i] + descendingOrderArray[j]) - descendingOrderArray[j];
//       }
//         }

// var nombres = [4, 2, 5, 1, 3];
// nombres.sort(function(a, b) {
//   return a - b;
// });
// console.log(nombres);
// // [1, 2, 3, 4, 5]

// let nombres = [4, 2, 5, 1, 3];
// nombres.sort((a, b) => a - b);
// console.log(nombres);

