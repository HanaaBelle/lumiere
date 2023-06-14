// Création du tableau array_colors_codemaker
const colors_combinaison_codemaker = ["Blue", "Rose", "Blue", "Rose"];

const couleurs_choisies = ["Purple", "Blue", "Purple", "Rose"]
function isTrueCombinaison(couleurs_choisies) {
    console.log("isTrueCombinaison(couleurs_choisies)")
    let nbr_couleurs_bien_placees = 0;
    let nbr_couleurs_mal_placees = 0;
    for (let j = 0; j < couleurs_choisies.length; j++) {
        let doesCurrentColorExistInCombinaison = false;
        for (let i = 0; i < colors_combinaison_codemaker.length; i++) {
            if (couleurs_choisies[j] === colors_combinaison_codemaker[i]) {
                if (i === j) {
                    nbr_couleurs_bien_placees++;
                } else {
                    doesCurrentColorExistInCombinaison = true;
                }
            }
        }
        if (doesCurrentColorExistInCombinaison === true){
            nbr_couleurs_mal_placees++;
        }
    }
    console.log("Le nombre de couleurs bien placées est = ", nbr_couleurs_bien_placees);
    //alert("Le nombre de couleurs bien placées est = " + nbr_couleurs_bien_placees);
    console.log("Le nombre de bonnes couleurs mal placées est = ", nbr_couleurs_mal_placees);
    //alert("Le nombre de bonnes couleurs mal placées est = " + nbr_couleurs_mal_placees);
    return (nbr_couleurs_bien_placees === 4);
}

const results = isTrueCombinaison(couleurs_choisies);
console.log(results);