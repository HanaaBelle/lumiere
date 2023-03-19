//1// Fonction sum1 qui prend en entrée un tableau d'entiers et qui retourne le résultat de leur addition :
function sum1(tableau_entiers) {
    let somme_entiers = 0;
    for (let i = 0; i < tableau_entiers.length; i++) {
        //additionner les entiers du tableau
        somme_entiers += tableau_entiers[i];
    }
    return somme_entiers;
}

//2// Fonction sum2 qui retourne le même résultat que sum1 mais en utilisant une fonction récursive :
function sum2(tableau_entiers) {
    //la fonction sum2() additionne les éléments et s'appelle jusqu'au dernier élément du tableau :
    //Si le nombre d'éléments du tableau = 0 (il n'y a pas d'éléments dans le tableau) alors
    if (tableau_entiers.length === 0) {
        // sum2() retourne la valeur 0;
        return 0;
    } else {
        //sinon sum2() est appelée à partir du 2ème élément autant de fois qu'il y aura d'élément dans le tableau;
        //puis au dernier appel de sum2() le résulat sera additionné à la valeur du 1er élément du tableau;
        return (tableau_entiers[0] + sum2(tableau_entiers.slice(1)));
    }
}

//3// Fonction qui calcul le factoriel avec deux méthodes (itérative et récursive) :
function factoriel(nombre) {
    // c'est le produit des entiers inférieurs ou égaux à un nombre donné.
    // Exemple : 3! = factoriel de 3 = 1 x 2 x 3 = 6
    //si nombre < 1 alors return console.log("Erreur le factoriel de " + nombre + " ne peut être calculé !")
    // si nombre = 1 alors return 1
    if (nombre === 1) return 1;
    else {
        let factoriel = nombre;
        for (let i = 1; i < nombre; i++) {
            factoriel *= i;
        }
        return factoriel;
    }
}

// C'est la même fonction mais par la méthode récursive :
function factoriel_recursif(nombre) {
    // Écrire une fonction factorial qui prend un entier en paramètre et calcule son factoriel récursivement.
    // D'abord il faut une condition de sortie : un return//
    // si nombre = 1 alors return 1
    if (nombre === 1) return 1;
    else {
        // sinon return factoriel_recursif(nombre-1) * nombre
        return factoriel_recursif(nombre - 1) * nombre;
        // Puis l'appel de la fonction récursive factoriel_(nombre)
    }
}

//Étape 4
// Écrire une fonction fibonacci qui prend un entier x en paramètre et résoud la suite de Fibonacci.

function fibonacci(x) {
    // En mathématiques, la suite de Fibonacci est une suite de nombres entiers dont chaque terme successif
    // représente la somme des deux termes précédents, et qui commence par 0 et 1.
    // Ainsi, les dix premiers termes qui la composent sont :
    // 0, 1, 1 (0+1), 2 (1+1), 3 (1+2), 5 (2+3), 8 (3+5), 13 (5+8), 21 (8+13) et 34 (13+21).
    let fibonacci = 0;
    let nombreMoins1 = 1;
    let nombreMoins2 = 0;
    for (let i = 0; i <= x; i++) {
        // si nombre = 0 alors return O fibonacci = 0
        if (i === 0 || i === 1)
            console.log(i);
        else {
            // si nombre = 1 = 1+0 alors return 1 fibonacci = 1
            // si nombre = 2 = 1+1 alors return 2 fibonacci = 2 (= 1+1 = 2-1 + 2-1) fibonacci = 1 + 1 = 2
            // si nombre = 3 = 2+1 alors return 3 fibonacci = 3 (= 1+2 = 3-2 + 3-1) fibonacci = 1 + 2 = 3
            // si nombre = 5 = 3+2 alors return 5 fibonacci = 5 (= 2+3 = 5-2 + 5-3) fibonacci = 2 + 3 = 5
            // si nombre = 8 = 5+3 alors return 8 fibonacci = 8 (= 5+3 = 5-2 + 5-3) fibonacci = 3 + 5 = 8
            fibonacci = nombreMoins1 + nombreMoins2;
            console.log(fibonacci);
            nombreMoins2 = nombreMoins1;
            nombreMoins1 = fibonacci;
        }
    }
}

// C'est la même fonction mais par la méthode récursive :
function fibonacci_recurcif(x) {
    if (x === 0 || x === 1) {
        fiboSet.add(x);
        return x;
    }
    else {
        let fibo = fibonacci_recurcif(x - 2) + fibonacci_recurcif(x - 1);
        fiboSet.add(fibo);
        return fibo;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////

const tableau = [1, 2, 3, 4];

let resultat_addition = sum1(tableau);
console.log("Le produit de l'addition des éléments du tableau avec la méthode 1 est égal à : ",
    resultat_addition);

let resultat_recurcivite_addition = sum2(tableau);
console.log("Le produit de l'addition des éléments du tableau avec la récursivité est égal à : ",
    resultat_recurcivite_addition);

let nombre = 10;

console.log("Le factoriel avec la méthode itérative du nombre", nombre + " est égal à "
    + factoriel(nombre));

console.log("Le factoriel avec la méthode récursive du nombre", nombre + " est égal à "
    + factoriel_recursif(nombre));

console.log("La suite de Fibonacci avec la méthode itérative des " + nombre + " premiers termes qui la compose est : ");
fibonacci(nombre);

// we need resultat
// we need a list of all fibo numbers : nombres uniques : set
let fiboSet = new Set();
console.log("La suite de Fibonacci avec la méthode récursive des " + nombre + " premiers termes qui la compose est : ");
let suite_fibonacci = fibonacci_recurcif(nombre);
//console.log("result = ", suite_fibonacci);
console.log(fiboSet);