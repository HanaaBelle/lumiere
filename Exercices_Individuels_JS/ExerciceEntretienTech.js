// Exercice 1 : FizzBuzz
// FizzBuzz est un exercice de programmation très commun.
// Écrivez une fonction qui affiche les nombres de 1 à 100,
// mais pour les multiples de 3, affichez "Fizz" à la place du nombre et
// pour les multiples de 5, affichez "Buzz".
// Pour les nombres qui sont multiples de 3 et 5, affichez "FizzBuzz".

// Déclaration de la fonction
function printFizzBuzz(){
    // boucle for qui loop sur les nombres de 1 à 100
    for (let i = 1; i <= 100 ; i++) {
        // Si le nombre est un multiple de 3 j'affiche Fizz
        if(i % 3 === 0){
            console.log("Fizz");
        }
        // Sinon si le nombre est un multiple de 5 j'affiche Buzz
        else if(i % 5 === 0){
            console.log("Buzz");
        }
        // Sinon si le nombre est un multiple de 3 et de 5 j'affiche FizzBuzz
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }
        else if (i % 3 !== 0 || i % 5 !== 0){
            console.log(i)
        }
    }
}

// Appel de la fonction et affichage du résultat de la fonction
printFizzBuzz();