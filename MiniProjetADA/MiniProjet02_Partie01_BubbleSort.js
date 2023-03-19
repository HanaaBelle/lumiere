//En JS ou Python, implémenter (on nous demande toujours une fonction)
// un *bubble sort* triant cette liste de 20 entiers :

//Bubble Sort en fonction JS
let triTableau = () => {
    let tableau = [2, 54, 7, 38, 22, 13, 19, 45, 31, 77, 98, 5, 12, 28, 81, 26, 72, 4, 20, 42];
    tableau.sort((a, b) => a - b);
    console.log(tableau);
}
triTableau()

//Bubble Sort en algorithme implémenté
let tableau = [2, 54, 7, 38, 22, 13, 19, 45, 31, 77, 98, 5, 12, 28, 81, 26, 72, 4, 20, 42];
function permut(i, tab) {
    let x;
    x = tab[i];
    tab[i] = tab[i + 1];
    tab[i + 1] = x;
}
function bubbleSort(tab) {
    let stopLoop = false;
    let index = 1;
    while (stopLoop === false && index <= tab.length) {
        let nbrPermut = 0;
        for (let i = 0; i < tab.length - 1; i++) {
            if (tab[i] > tab[i + 1]) {
                permut(i, tab);
                nbrPermut++;
                console.log(nbrPermut);
            }
        }
        if (nbrPermut === 0) {
            stopLoop = true;
        } else {
            index++
        }
    }

}
bubbleSort(tableau);
console.log(tableau);

//Ecrire une fonction qui prend deux listes en arguments et retourne un dictionnaire
//ayant pour clés la première liste et pour valeurs la deuxième, en associant les clés et valeurs
//par index de leurs listes respectives.

//listeCles = [2, 7, 38, 22, 13, 19, 31, 5, 12, 28, 26, 4, 20];
//listeValeurs = [54, 38, 22, 13, 19, 45, 31, 77, 9, 12, 28, 81, 26, 72, 4, 20, 42];

//dictionnaire = [cles ":" valeurs];


//function dictionnaire (listeCles)
//return (listeCles[0], listeValeurs[0]);

