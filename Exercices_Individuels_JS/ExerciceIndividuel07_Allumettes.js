// Le jeu des allumettes : au départ, il y a un tas de 50 allumettes, (ou tout autre objet : cailloux, jetons, ...).
// Chacun à son tour, les deux joueurs ôtent obligatoirement entre 1 et 6 allumettes.
// Celui qui ôte la dernière allumette gagne.

// Etape 1 :
// Fonction qui prend en paramètre le nombre d'allumettes à enlever du reste.
// Pour rappel, un nom de fonction doit décrire clairement ce que fait celle-ci.

//*** On a 50 allumettes au départ.
const nbr_allumettes_tas = 50;

function ote_allumettes(nbr_allumettes_a_enlever){

}

// Etape 2 :
// Fonction qui demande a l'utilisateur combien d'allumettes il souhaite retirer tant qu’il y a des allumettes
// dans le tas.


function demande_nbr_allumettes_a_retirer(){
    let nbr_allumettes_a_retirer;
    do {
        const message = prompt("Combien d'allumettes souhaitez-vous retirer ? ");
        nbr_allumettes_a_retirer = parseInt(message);
    } while((nbr_allumettes_tas - nbr_allumettes_a_retirer) > 0 )
    return nbr_allumettes_a_retirer;
}

const nbr_allumettes_a_enlever = demande_nbr_allumettes_a_retirer();

// Etape 3 :
// Limiter le nombre d’allumettes à pouvoir être retirées de 1 à 6.
// Ajouter a votre jeu la notion de victoire.