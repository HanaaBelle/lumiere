// Création du tableau array_colors_possible qui contient la palette de couleurs possibles à choisir :
const colors_possible = ["Rose", "Blue", "Purple", "Green"];

const couleurs_choisies = ["Purple", "Purple", "Green", "Purple"]

function isColorEntredCorrect(couleurs_choisies) {
    console.log("isColorEntredCorrect(couleurs_choisies)");
    let nbr_couleurs_correctes = 0;
    for (let j = 0; j < couleurs_choisies.length; j++) {
        let couleur_correct = false;
        for (let i = 0; i < colors_possible.length; i++) {
            if (couleurs_choisies[j] === colors_possible[i]) {
                couleur_correct = true;
            }
        }
        if (couleur_correct === true) {
            nbr_couleurs_correctes++;
        }
    }
    if (nbr_couleurs_correctes !== couleurs_choisies.length) {
        console.log("Une ou plusieurs valeurs ne sont pas valides !")
        //alert("Les couleurs ne sont pas valides !");
    }
    else {
        console.log("Vous avez entrez des valeurs valides.");
        //alert("Vous avez entrez des couleurs valident mais qui ne font pas partie de la combinaison.");
    }
    console.log("nbr_couleurs_correctes", nbr_couleurs_correctes);
    console.log("nbr_couleurs_incorrectes", couleurs_choisies.length - nbr_couleurs_correctes);
    return (nbr_couleurs_correctes === couleurs_choisies.length);
}

const results = isColorEntredCorrect(couleurs_choisies);
console.log(results);