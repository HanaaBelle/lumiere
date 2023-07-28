// Fonction qui supprime tout le texte qui suit l'un des marqueurs de commentaire passés (les commentaires
// et tout espace blanc à la fin de la ligne doit également être supprimé).
// Par exemple :
// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
function delete_comments(input_string, markers) {
    // Créer un nouvel input_string "new_input" une chaine de caractère qu'on aura à retourner
    let new_input_string = "";

    // Décomposer notre string "input_string" en éléments stockés dans un tableau en suivant les retours à la ligne "\n"
    let paragraphs_array = input_string.split("\n");
    console.log(paragraphs_array);

    // Décomposer mon input_string en mots pour retrouver le marker en suivant les espaces " "
    //let words_array = input_string.split(" ");
    //console.log(words_array);

    // 1ère boucle "For" qui loop sur le tableau "paragraphs_array"
    for (let i = 0; i < paragraphs_array.length; i++) {

        // initialiser l'index qui parcoure le tableau words_array
        let k = 0;

        // Pour flaguer la boucle
        let stopLoop = false;

        // 2ème boucle "While" qui loop sur le tableau words_array
        while (k < paragraphs_array[i].length && stopLoop !== true) {

            // 2ème boucle "For" qui loop sur le tableau "markers"
            for (let j = 0; j < markers.length; j++) {

                // Si on trouve un "marker" dans notre liste de "mots" Alors
                if (markers[j] === paragraphs_array[i][k]) {

                    // Il stock dans "new_input" le nouveau "paragraphe" sans le commentaire (suppression du marker
                    // et de tout ce qu'il y a à sa gauche)
                    new_input_string += paragraphs_array[i].slice(0, paragraphs_array[i].indexOf(markers[j])).trimEnd() + "\n";
                    //
                    stopLoop = true;
                }
            }
            // On incrémente l'index qui parcoure le "paragraphe"
            k++;
        }
        if (!stopLoop){
            new_input_string += paragraphs_array[i].trimEnd() + "\n";
        }
    }
    return new_input_string
}

let markers = ["#", "!", "@", "*", "%", "-"];

// La chaîne d'entrée :
let input_string =
    "apples, pears # and bananas\n" +
    "grapes\n" +
    "bananas !apples";

// La production attendue serait :

// apples, pears
// grapes
// bananas

let clean_input = delete_comments(input_string, markers);
console.log(clean_input);
// Fonction qui supprime tout le texte qui suit l'un des marqueurs de commentaire passés (les commentaires
// et tout espace blanc à la fin de la ligne doit également être supprimé).
// Par exemple :
// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
function delete_comments(input_string, markers) {
    // Créer un nouvel input_string "new_input" une chaine de caractère qu'on aura à retourner
    let new_input_string = "";

    // Décomposer notre string "input_string" en éléments stockés dans un tableau en suivant les retours à la ligne "\n"
    let paragraphs_array = input_string.split("\n");
    console.log(paragraphs_array);

    // Décomposer mon input_string en mots pour retrouver le marker en suivant les espaces " "
    //let words_array = input_string.split(" ");
    //console.log(words_array);

    // 1ère boucle "For" qui loop sur le tableau "paragraphs_array"
    for (let i = 0; i < paragraphs_array.length; i++) {

        // initialiser l'index qui parcoure le tableau words_array
        let k = 0;

        // Pour flaguer la boucle
        let stopLoop = false;

        // 2ème boucle "While" qui loop sur le tableau words_array
        while (k < paragraphs_array[i].length && stopLoop !== true) {

            // 2ème boucle "For" qui loop sur le tableau "markers"
            for (let j = 0; j < markers.length; j++) {

                // Si on trouve un "marker" dans notre liste de "mots" Alors
                if (markers[j] === paragraphs_array[i][k]) {

                    // Il stock dans "new_input" le nouveau "paragraphe" sans le commentaire (suppression du marker
                    // et de tout ce qu'il y a à sa gauche)
                    new_input_string += paragraphs_array[i].slice(0, paragraphs_array[i].indexOf(markers[j])).trimEnd() + "\n";
                    //
                    stopLoop = true;
                }
            }
            // On incrémente l'index qui parcoure le "paragraphe"
            k++;
        }
        if (!stopLoop){
            new_input_string += paragraphs_array[i].trimEnd() + "\n";
        }
    }
    return new_input_string
}

let markers = ["#", "!", "@", "*", "%", "-"];

// La chaîne d'entrée :
let input_string =
    "apples, pears # and bananas\n" +
    "grapes\n" +
    "bananas !apples";

// La production attendue serait :

// apples, pears
// grapes
// bananas

let clean_input = delete_comments(input_string, markers);
console.log(clean_input);
