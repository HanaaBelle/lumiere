// Master Mind se joue avec un joueur qui choisit une combinaison de couleur et un autre joueur qui doit deviner
// ces couleurs et dans quel ordre.
// Un codemaker et un codebreaker. A chaque tour, le codebreaker doit faire une
// proposition, le codemaker doit lui répondre en indiquant le nombre de couleurs bien placées et le nombre de
// bonnes couleurs mal placées.

// Partie 1 :

// Création du tableau array_colors_possible qui contient la palette de couleurs possibles à choisir :
const colors_possible = ["Red", "Yellow", "Brown" , "Rose", "Orange" , "Blue", "Purple", "Green", "Gray"];

// Création du tableau array_colors_choosen qui contient les deux couleurs choisies par le codemaker
//const colors_choosen_codemaker = ["Bleu", "Rose"];

// Création du tableau array_colors_codemaker
const colors_combinaison_codemaker = colors_possible[Math.floor(Math.random()*4)];
console.log(colors_combinaison_codemaker);

let couleurs_choisies = [];

// Fonction*** choose_colors() pour que l'utilisateur entre les quatre couleurs qu'il choisira
function choose_colors() {
    console.log("choose_colors()");
    let colors_choosen_codebreaker = [];
    for (let i = 0; i < colors_combinaison_codemaker.length; i++) {
        let couleur_choisie = prompt("Choisissez la couleur numéro " + (i+1) + " entre : " + "\n " +
            "\"Red\", \"Blue\", \"Yellow\", \"Green\", \"Rose\", \"Orange\", \"Purple\", \"Brown\", \"Gray\":");
        colors_choosen_codebreaker.push(couleur_choisie);
        document.getElementById("couleur").innerText += "\n" + colors_choosen_codebreaker[i];
    }
    return colors_choosen_codebreaker;
}

// Fonction1 isColorEntredCorrect(couleurs_choisies) prend en paramètre le résultat de choose_colors() : couleurs_choisies
// et retourne true or false Si la proposition est bien composée par les 4 couleurs possibles et rien d’autres :
function isColorEntredExist(couleurs_choisies) {
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
        alert("Les couleurs ne sont pas valides !");
    } else {
        console.log("Vous avez entrez des valeurs valides.");
        alert("Vous avez entrez des couleurs valident.");
    }
    console.log("nbr_couleurs_correctes", nbr_couleurs_correctes);
    console.log("nbr_couleurs_incorrectes", couleurs_choisies.length - nbr_couleurs_correctes);
    return (nbr_couleurs_correctes === couleurs_choisies.length);
}

// Fonction2 isTrueCombinaison(couleurs_choisies) prend en paramètre le résultat de choose_colors() :
// couleurs_choisies qui retourne true ou false si la bonne combinaison est trouvée ou non
function isTrueCombinaison(couleurs_choisies) {
    console.log("isTrueCombinaison(couleurs_choisies)")
    let nbr_couleurs_bien_placees = 0;
    let nbr_couleurs_mal_placees = 0;
    for (let j = 0; j < couleurs_choisies.length; j++) {
        let couleur_courrante_existe_combinaison = false;
        for (let i = 0; i < colors_combinaison_codemaker.length; i++) {
            if (couleurs_choisies[j] === colors_combinaison_codemaker[i]) {
                if (i === j) {
                    nbr_couleurs_bien_placees++;
                } else {
                    couleur_courrante_existe_combinaison = true;
                }
            }
        }
        if (couleur_courrante_existe_combinaison === true) {
            nbr_couleurs_mal_placees++;
        }
    }
    console.log("Le nombre de couleurs bien placées est = ", nbr_couleurs_bien_placees);
    alert("Le nombre de couleurs bien placées est = " + nbr_couleurs_bien_placees +
        "\nLe nombre de bonnes couleurs mal placées est = " + nbr_couleurs_mal_placees);
    console.log("Le nombre de bonnes couleurs mal placées est = ", nbr_couleurs_mal_placees);
    return (nbr_couleurs_bien_placees === 4);
}

function afficherCombinaisonBreakmaker(couleurs_choisies){
    let choix_couleur = "";
    for (let i = 0; i < couleurs_choisies.length; i++){
        if (i === 0){
            choix_couleur += couleurs_choisies[i];
        }
        else{
            choix_couleur += ", " + couleurs_choisies[i];
        }
    }
    return choix_couleur;
}

// Fonction3 didCodebreakerWin() gère la partie (continuer tant que/fin si c'est gagné)
function didCodebreakerWin() {
    console.log("didCodebreakerWin()")
    let essai = 0;
    let stopLoop = false;
    while (essai <= 3 && stopLoop === false) {
        couleurs_choisies = choose_colors()
        if (isColorEntredExist(couleurs_choisies) === true) {
            if (isTrueCombinaison(couleurs_choisies) === true) {
                stopLoop = true;
                console.log("Bravo ! Vous avez trouvé la combinaison. Votre combinaison de choix de couleurs est :",
                    afficherCombinaisonBreakmaker(couleurs_choisies));
                alert("Bravo ! Vous avez trouvé la combinaison.\nVotre combinaison de choix de couleurs est :"
                    + afficherCombinaisonBreakmaker(couleurs_choisies));
            } else {
                essai++;
                console.log("Votre combinaison de choix de couleurs est : "
                    + afficherCombinaisonBreakmaker(couleurs_choisies)
                    + "Veuillez réessayer ce n'est pas encore trouvé. Il vous reste encore : "
                    + (3 - essai) + " essai(s)");
                alert("Votre combinaison de choix de couleurs est : \n"
                    + afficherCombinaisonBreakmaker(couleurs_choisies)
                    + "\n\nVeuillez réessayer ce n'est pas encore trouvé. \nIl vous reste encore : "
                    + (3 - essai) + " essai(s)");
            }
        } else {
            essai++;
            console.log("Votre combinaison de choix de couleurs est :"
                + afficherCombinaisonBreakmaker(couleurs_choisies)
                + "Il vous reste encore : " + (3 - essai) + " essai(s)");
            alert("Votre combinaison de choix de couleurs est : \n"
                + afficherCombinaisonBreakmaker(couleurs_choisies)
                + "\n\nIl vous reste encore : " + (3 - essai) + " essai(s)");
        }
    }
    if (essai > 3) {
        console.log("Dommage ! Vous n'avez pas trouvé la combinaison. Votre combinaison de choix de couleurs est :",
            afficherCombinaisonBreakmaker(couleurs_choisies) + "\nLa combinaison secrète est : ",
            afficherCombinaisonBreakmaker(colors_combinaison_codemaker));
        alert("Dommage ! Vous n'avez pas trouvé la combinaison. Votre combinaison de choix de couleurs est :" +
            afficherCombinaisonBreakmaker(couleurs_choisies) + "\nLa combinaison secrète est : ",
            afficherCombinaisonBreakmaker(colors_combinaison_codemaker));
    }
}

didCodebreakerWin();
