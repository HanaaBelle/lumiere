// Fonction qui déplace la première lettre de chaque mot à la fin de celui-ci, puis ajoute "ay" à la fin du mot.
// On laisse les signes de ponctuation intacts.

function pigIt(text) {
    // Déclaration d'un nouveau texte
    let new_text = "";

    // Création d'un nouveau tableau qui contient tous les mots du texte
    let words_array = text.split(" ");

    // Déclaration du tableau des ponctuations
    let ponctuation_array = [".", ";", ":", "!", "?", "..."];

    //  1ère boucle FOR qui loop sur le tableau des mots
    for (let i = 0; i < words_array.length; i++) {

        // Si un signe de ponctuation est inclus dans un mot du tableau
        if (!ponctuation_array.includes(words_array[i])) {

            // Le cas où un mot ne contient qu'une seule lettre
            if (words_array[i].length === 1) {
                new_text += words_array[i].concat("ay ");
                continue;
            }

            // Si c'est le dernier mot du texte
            else if (i === words_array.length - 1) {

                // Le nouveau texte va contenir le mot qu'on aura extrait à partir du 2ème caractère du mot jusqu'à
                // sa fin puis on le concatène avec "ay"
                new_text += words_array[i].slice(1).concat(words_array[i][0], "ay");

                // Si ce n'est pas le dernier mot le nouveau texte va contenir le mot qu'on aura extrait à partir
                // du 2ème caractère du mot jusqu'à sa fin puis on le concatène avec "ay"
            } else {
                new_text += words_array[i].slice(1).concat(words_array[i][0], "ay ");
            }
        } else {
            new_text += words_array[i].concat(" ");
        }
    }
    return new_text;
}

// Exemples :

let text1 = 'A pig latin is cool';

// On devrait obtenir : igPay atinlay siay oolcay
let resultat1 = pigIt(text1);
console.log(resultat1);

let text2 = 'Hello world !';
// On devrait obtenir : elloHay orldway !

let resultat2 = pigIt(text2);
console.log(resultat2);


