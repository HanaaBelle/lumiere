//1. Enoncé
// Les palindromes sont des mots ou des suites de caractères qui se lisent dans les deux sens,
// comme les mots “radar” ou “kayak”.
// Le but de cet exercice est de détecter des dates palindromes,
// date que l’on peut donc lire dans les deux sens, sans prendre en compte le séparateur de date (/).


//
function split(date) {
    const slash = '/';
    let jour = "";
    let mois = "";
    let annee = "";
    for (let i = 0; i < date.length; i++) {
       switch (i) {
                case (i === 0 || i === 1):
                    jour += date[i];
                    console.log(i);
                    break;
                case (i === 3 || i === 4):
                    mois += date[i];
                    console.log(i);
                    break;
                case (i === 6 || i === 7 || i === 8 || i === 9):
                    annee += date[i];
                    console.log(i);
                    break;
                case (i === 2 || i === 5):
                    continue;
                default:
                    break;
            }
        }
    }

//Étape 1
// Créer une fonction isValidDate qui prend en paramètre une date en string et determine si elle est valide.
// Pour qu'une date soit valide, il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.
// Tout au long de l’exercice, on assumera des années supérieures à 999 et inférieures 9999 - autrement dit,
// l’année sera systématiquement représentée sur 4 caractères.

//Vous aurez probablement besoin de créer une autre fonction maxDaysInMonth pour vous assurer que le nombre
// de jours par mois est valide
// (ex: le 31/11 n’est pas valide, le mois de novembre ne contient que 30 jours)

function isValidate(date) {
    //1 Décomposer la chaine de caractère date en jours mois et année
    //2 L'année est comprise entre 999 et 9999
    //3 Les mois entre 1 et 12
    //4 Les jours entre 1 et 28, 29, 30, 31
    let tableau_date = date;
    // Fonction split prend la chaine de caractère date cherche le caractère "/" et décompose en jour mois et année
    tableau_date = date.split("/");
    let jour = parseInt(tableau_date[0]);
    let mois = parseInt(tableau_date[1]);
    let annee = parseInt(tableau_date[2]);
    let date_valide =
        annee <= 999 || annee >=9999 || mois <= 1 || mois >=12 || jour < 1 || jour > maxDaysInMonth(mois);
    // Vérifier la taille du tableau : jour/mois/année lenght=10
    if (tableau_date.length !== 3)
        return false;
    else if (date_valide === true)
        return false;
    else
        return true;
}

function maxDaysInMonth(mois) {
    //combien il y a de jours dans la fonction
    let dictionnaire_mois = {1: 31, 2: [28,29], 3: 31, 4: 30, 5: 31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31};
    return dictionnaire_mois[mois];
}

// Étape 2
// Créer une fonction isPalindrome qui prend une date en string en paramètre et retourne un booléen qui indique
// si la date est un palindrome.
// Si la date est invalide, retourner false.
//
// Exemple de date palindrome: 11/02/2011. Les caractères / ne sont pas pris en compte.
// isPalindrome("11/02/2011") // true
// isPalindrome("03/04/2001") // false

function isPalindrome(date) {
    let date_palindrome = true;


    return date_palindrome;
}

// Étape 3
//
// Créer une fonction getNextPalindromes qui donne les x prochaines dates palindromes à compter d’aujourd’hui.
// La fonction prendra le x en paramètre.
//
// getNextPalindromes(8)
// 22/02/2022
// 03/02/2030
// 13/02/2031
// 23/02/2032
// 04/02/2040
// 14/02/2041
// 24/02/2042
// 05/02/2050

function getNextPalindromes(x_dates) {
    let tableau_next_dates_palindromes = [];


    return tableau_next_dates_palindromes;
}

//Étape 4
//
// Refactorer la fonction isPalindrome pour faire en sorte qu’elle renvoie si, ou non, une chaine de caractère
// est un palindrome.
// Créer ensuite une nouvelle fonction isDatePalindrome qui reprendra les spécificités du palindrome
// au format date (comme s’assurer que la date est valide) et qui appellera isPalindrome.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// On teste :
// isValidDate("03/04/2001") // true
// isValidDate("03/14/2001") // false car 14 n'est pas un mois valide
let date_correcte = isValidate("03/14/2001");
console.log(date_correcte);