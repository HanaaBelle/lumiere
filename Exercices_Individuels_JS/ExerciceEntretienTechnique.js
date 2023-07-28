// Étant donné un tableau d'entiers nums et une cible d'entiers, renvoie les indices des deux nombres tels qu'ils
// s'additionnent à la cible. Vous pouvez supposer que chaque entrée aurait exactement une solution et vous ne pouvez
// pas utiliser le même élément deux fois. Vous pouvez retourner la réponse dans n'importe quel ordre.

// Exemple 1:
// Entrée : nums = [2,7,11,15], cible = 9
// Sortie : [0,1]
// Explication : Puisque nums[0] + nums[1] == 9, nous renvoyons [0, 1].

// Exemple 2 :
// Entrée : nums = [3,2,4], cible = 6
// Sortie : [1,2]

// Exemple 3 :
// Entrée : nums = [3,3], cible = 6
// Sortie : [0,1]

// Contraintes:
// Une seule réponse valide existe.

// Fonction 1 avec deux boucles FOR
function searchIndex(nums, cible){
    for (let i = 0; i < nums.length; i++) {
        // code
        for (let j = i + 1; j < nums.length; j++) {
            // Savoir si l'addition des éléments du tableau est égale à la cible
            if (cible === (nums[i] + nums[j])) {
                return [i, j];
            }
        }
    }
    return null;
}

// Fonction 2 optimisée avec une seule boucle For
function rechercherIndex(nums, cible){
    let indexPivot = 0;
    let soustractionCibleNombreCourant = cible - nums[indexPivot];
    //console.log(soustractionCibleNombreCourant);
    for (let indexBoucle = 1; indexBoucle < nums.length; indexBoucle++) {
        if(soustractionCibleNombreCourant === nums[indexBoucle]){
            return [indexPivot, indexBoucle];
        }
        else{
            indexPivot = indexBoucle;
            soustractionCibleNombreCourant = cible - nums[indexBoucle];
        }
    }
    return null;
}

// Déclaration du tableau et de la cible
const nums = [2,7,11,15];
const cible = 18;

// Appel de la fonction
//const resultatFonction = searchIndex(nums, cible);

const resultatFonction = rechercherIndex(nums, cible);

// Afficher le résultat
//console.log(resultatFonction);

///

// (a * b) % 10 est équivalent à ((a % 10) * (b % 10)) % 10
let lastDigit1 = function(str1, str2){
    const number1 = parseInt(str1);
    const number2 = parseInt(str2);
    if(number1 === 0) {
        return 0;
    }
    else if(number2 === 0 || (number1 === 0 && number2 === 0)){
        return 1;
    }
    else{
        let exponentiel = 1;
        for(let i = 1; i <= number2; i++){
            exponentiel = exponentiel * number1;
        }
        console.log(exponentiel);
        return exponentiel % 10;
    }
}

let lastDigit = function(str1, str2){
    const number1 = parseInt(str1);
    const number2 = parseInt(str2);
    if(number1 === 0) {
        return 0;
    }
    else if(number2 === 0 || (number1 === 0 && number2 === 0)){
        return 1;
    }
    else{
        let digit1 = number1 % 10;
        console.log(digit1);
        let digit2 = number2 % 10;
        console.log(digit2);
        let exponentiel = (digit1 * digit2) % 10;
        console.log(exponentiel);
        for(let i = 1; i <= number2; i++){
            exponentiel = (exponentiel * (digit1 * digit2)) % 10;
            console.log(exponentiel)
        }
        console.log(exponentiel);
        return exponentiel;
    }
}
let resultat = lastDigit("2", "3");
console.log(resultat);