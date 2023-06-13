//ça consiste à "décrire" des chaînes de caractères selon le principe suivant :
// L'objectif de l'exercice est de réaliser un générateur de suites de Conway.

// Prenons la chaîne de caractères "a". Celle-ci est composée d'une (1) occurrence du caractère 'a'.
// Nous pouvons donc décrire la chaîne "a" par la chaîne "1a".
// Prenons désormais la nouvelle chaîne "1a". Celle-ci est composée d'un (1) caractère '1' puis d'un (1) caractère 'a'.
// Nous pouvons la décrire par "111a".
// De même, la chaîne "111a" est composée de 3 caractères consécutifs '1' puis d'un (1) caractère 'a'.
// Nous pouvons la décrire comme "311a"
// et ainsi de suite...
// Si on représente les chaînes successives verticalement, où chaque chaîne décrit la précédente,
// nous obtenons : a1a111a311a13211a111312211a...

// Etape 1 :
// Créer une fonction decomposeChaine qui prend en paramètre une chaine et renvoie une nouvelle_chaine dans laquelle
// les caractères successifs non identiques sont séparés par un espace.
// Exemeples :
// decomposeChaine("ab")     // renvoie "a b"
// decomposeChaine("aabbca") // renvoie "aa bb c a"`

console.log("C'est ma chaine : " + decomposeChaine("aabbca"));

function decomposeChaine(chaine) {
    // si la chaine est vide alors return undefined
    if (chaine.length === 0) return undefined;
    // sinon
    // on affecte à nouvelle_chaine la valeur du premier caractère de chaine
    let nouvelle_chaine = chaine[0];
    console.log(nouvelle_chaine);
    // commencer à partir du 2ème caractère de chaine
    let i = 1;
    while (i < chaine.length) {
        console.log(chaine[i]);
        // si les deux caractères successifs sont différents
        if (chaine[i - 1] !== chaine[i]) {
            // on les sépare avec un espace en affectant à nouvelle_chaine un " "
            nouvelle_chaine += " ";
        }
        nouvelle_chaine += chaine[i];
        i++;
    }
    return nouvelle_chaine;
}

// Etape 2 :
// Créer une fonction decritChaine, inspirée de decomposeChaine, qui prend en paramètre une chaine et renvoie une nouelle_chaine
// qui décrit, tel qu'expliqué ci-dessus, les caractères qui constituent la chaîne en paramètre.
// Exemples:
// decritChaine("ab")      // renvoie "1a1b"
// decritChaine("aabbca")  // renvoie "2a2b1c1a"

function decritChaine(chaine) {
    if (chaine.length === 0) {
        return undefined
    } else {
        let nouvelle_chaine = "";
        let stopLoop = false;
        let i = 0;
        let compteur;
        while (i < (chaine.length - 1)) {
            compteur = 0;
            if (chaine[i] === chaine[i + 1]) {
                while (chaine[i] === chaine[i + 1] && stopLoop === false) {
                    if (chaine[i] !== chaine[i + 1]) {
                        stopLoop = true;
                    } else {
                        compteur++;
                        i++;
                    }
                }
            }
            compteur++;
            nouvelle_chaine += compteur + chaine[i];
            i++;
        }
        if (i === (chaine.length - 1)) {
            nouvelle_chaine += 1 + chaine[i];
        }
        return nouvelle_chaine;
    }
}

// Etape 3 :
// Créer une fonction suiteConway qui donne les n premiers termes de la suite qui commence par le caractère "a" par exemple.
// n et "a" sont passés en paramètres de la fonction.
// Exemples :
// suiteConway('a', 3)
// a
// 1a
// 111a
// suiteConway('1', 3)
// 1
// 11
// 21

function suiteConway(caractere, nombre) {
    let chaine = "";
    let suiteconway = "";
    if (caractere === "") {
        return "Chaine vide";
    } else if (caractere === " ") {
        return "Espace blanc";
    } else {
        //afficher "la suite de Conway"
        chaine = caractere;
        suiteconway = chaine;
        for (let i = 1; i < nombre; i++) {
            chaine = decritChaine(chaine);
            suiteconway += "\n" + chaine;
        }
    }
    return suiteconway;
}

// Etape 4 :
// Afficher la suite de Conway générée dans un navigateur. Utiliser un texte centré pour l'afficher
// sous forme de pyramide.

function conwayPyramide(chaine, nombre) {
    let chaine_pyramide = "";
    let suite_conway = "";
    let tab_chaines = [];
    // chaine sera décomposée en mots puis sa valeur sera affectée à chaine_pyramide (qui sont séparés par un retour en ligne)
    chaine_pyramide = chaine.split("\n");
    for (let i = 0; i < nombre; i++) {
        tab_chaines[i] = chaine_pyramide[i];
        if (i === 0) {
            tab_chaines[i] =
                " ".repeat(((chaine_pyramide[nombre - 1].length - chaine_pyramide[i].length) / 2) + 1)
                + tab_chaines[i];
            suite_conway += "\n" + tab_chaines[i];
        } else {
            tab_chaines[i] =
                " ".repeat((chaine_pyramide[nombre - 1].length - chaine_pyramide[i].length) / 2)
                + tab_chaines[i];
            suite_conway += "\n" + tab_chaines[i];
        }
    }
    return suite_conway;
}

// Appel et Affichage des résultats :

let char = "a";
let number = 14;
let chaine = suiteConway(char, number);
let chaine_pyramide = conwayPyramide(chaine, number);
//console.log(`Une représentation des ${number} chaînes successives verticalement :\n` + chaine);
console.log(`Une représentation des ${number} chaînes successives en pyramide :\n` + chaine_pyramide);

document.getElementById("pyramide-suite-conway").innerText = chaine_pyramide;