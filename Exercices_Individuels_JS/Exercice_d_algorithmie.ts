// Algorithme 1 : qui demande à l’utilisateur un nombre compris entre 1 et 3 jusqu’à ce que la réponse convienne.
function demanderBonneReponse(nombre) {
    console.log(nombre);
    if (isNaN(nombre)) {
        console.log(nombre + " n'est un nombre ");
    } else if (nombre !== 1 && nombre !== 2 && nombre !== 3) {
        console.log(nombre + " n'est pas correct")
    } else {
        console.log("La réponse est : " + nombre);
    }
}

let nombre :number = 34;
// Appel de la fonction
// demanderBonneReponse(nombre);


//////////////
