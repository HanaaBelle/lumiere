/* Écrivez une fonction en JavaScript qui prend en entrée un tableau d'entiers
(par exemple : [4, 3, 6, 8, 3, 2, 5, 6, 4]) et qui renvoie un nouveau tableau contenant tous les éléments qui
apparaissent plus d'une fois dans le tableau d'origine (par exemple: [3, 6, 4]) */

function find_occurrences(tab) {
    let tab_occurrences = [];
    for (let i = 0; i < tab.length - 1; i++) {
        let stopLoop = false;
        let j = i + 1;
        while (j < tab.length && stopLoop === false) {
            if (tab[i] === tab[j]) {
                tab_occurrences.push(tab[i]);
                console.log("Occurrence " + tab[i] + " à l'index " + j);
                stopLoop = true;
            }
            j++
        }
    }
    return tab_occurrences;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Appel de la fonction
let tableau = [4, 3, 6, 8, 3, 2, 5, 6, 4];
let tableau_occurrences = find_occurrences(tableau);
console.log(tableau_occurrences);