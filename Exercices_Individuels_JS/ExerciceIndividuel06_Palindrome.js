//*** La fonction maxDaysInMonth(mois) prend en paramètre mois et retourne le nombre maximum de jour dans ce mois.
// Elle s'assure que le nombre de jours par mois est valide.
// (ex: le 31/11 n’est pas valide, novembre contient 30 jours).
function maxDaysInMonth(mois) {
    //Créer une dictionnaire (mois(clés):jours(valeurs)) qui va contenir les mois et le nombre des jours de chaque mois
    const dictionnaire_jours_du_mois = {
        1: 31,
        2: [28, 29],
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    }
    //Fonction maxDaysInMonth(mois) retourne la valeur du mois précisé lors de l'appel
    return dictionnaire_jours_du_mois[mois];
}

//*** La fonction dateSplitToDictionnaire(date)
function dateSplitToDictionnaire(date) {
    //Créer date_en_dictionnaire pour remplir le dictionnaire par la date au format (clé:valeur)
    //(jours:valeur, mois:valeur, annee:valeur)
    let date_en_dictionnaire = {};
    //Créer tableau_de_date qui va contenir les jours, mois, années en utilisant la fonction split qui permet
    //de découper date en mots [jours, mois, année], la découpe se fait à partir du caractère "/" qui représente
    //le séparateur des mots dans "date"
    const tableau_de_date = date.split("/");
    //Afficher tableau_de_date
    console.log("tableau de date format string : ", tableau_de_date);
    if (tableau_de_date.length !== 3) {
        //Afficher message date entrée n'est pas au format "dd/mm/aaaa"
        console.log("Erreur! La date entrée n'est pas au format \"dd/mm/aaaa\".");
        return null;
    } else {
        // Récupérer les valeurs : jours, mois et année stockées dans tableau_de_date et les mettre dans
        // date_en_dictionnaire = {'jours': valeur, 'mois': valeur, 'annee', valeur} (clés,valeurs)
        date_en_dictionnaire['jours'] = parseInt(tableau_de_date[0]);
        date_en_dictionnaire['mois'] = parseInt(tableau_de_date[1]);
        date_en_dictionnaire['annee'] = parseInt(tableau_de_date[2]);
        console.log(date_en_dictionnaire['jours'], date_en_dictionnaire['mois'], date_en_dictionnaire['annee']);
        return date_en_dictionnaire;
    }
}

function isNotANumber(dateAsDictionnary) {
    //Créer is_not_a_number pour determiner si les valeurs de jours, mois et année sont des nombres
    let is_not_a_number =
        isNaN(dateAsDictionnary['jours'])
        || isNaN(dateAsDictionnary['mois'])
        || isNaN(dateAsDictionnary['annee']);
    if (is_not_a_number === true) {
        //Afficher les valeurs de jours, mois et année
        console.log(dateAsDictionnary['jours'], dateAsDictionnary['mois'], dateAsDictionnary['annee']);
        //Afficher
        console.log("Erreur! La date entrée est incorrecte.");
        return true;
    }
    else
        return false;
}

function date_non_valide(dateAsDictionnary) {
    //Créer is_valid_date qui return vrai ou faux
    //pour les jours on appelle la fonction maxDaysIsMonth(mois) pour s'assurer que les jours sont soit :
    //28,29,30 ou 31
    let is_not_valid_date =
        (dateAsDictionnary['annee'] <= 999 || dateAsDictionnary['annee'] >= 9999)
        || (dateAsDictionnary['mois'] < 1 || dateAsDictionnary['mois'] > 12)
        || (dateAsDictionnary['jours'] < 1 || dateAsDictionnary['jours'] > maxDaysInMonth(dateAsDictionnary['mois']));
    if (is_not_valid_date === true) {
        //Afficher message date entrée n'est pas au format "dd/mm/aaaa"
        console.log("Erreur! La date entrée n'existe pas.");
        return true;
    }
    else
        return false;
}

function is_valid_year(dateAsDictionnary) {
    //Créer bissextile qui va dire si vrai ou faux l'année est bissextile
    let bissextile = //2000
        (dateAsDictionnary['annee'] % 400 === 0) // 2000 % 400 === 0
            || ((dateAsDictionnary['annee'] % 4 === 0) // 2000 % 4 === 0
            && (dateAsDictionnary['annee'] % 100 !== 0)); // 2000 % 100 !== 0
    //Créer is_not_valid_year pour le cas 29/02 qui n'existe pas
    let is_not_valid_year =
        (bissextile === false)
        && (dateAsDictionnary['mois'] === 2)
        && (dateAsDictionnary['jours'] === 29);
    if (is_not_valid_year === true) {
        //Afficher message date entrée n'est pas au format "dd/mm/aaaa"
        console.log("Erreur! La date entrée n'existe pas.");
        return false; //isValidYear?
    }
    else
        return true;
}

//Etape 1 La fonction isValidDate(date) prend en paramètre une date en string et determine si elle est valide.
// Pour qu'une date soit valide, il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.
// Les années doivent êtres supérieures à 999 et inférieures 9999 donc systématiquement représentées sur 4 caractères.
function isValidDAte(date) {
    //Afficher la chaine de caractère entrée : "date"
    console.log(date);
    //Cas de false c-à-d (early exit)
    if (date.length !== 10) {
        //Afficher
        console.log("Erreur! La date entrée est incorrecte.");
        return false;
    }
    else {
        //Appel de dateSplitToDictionnaire(date) pour afficher si la date est au bon format dd/mm/aaaa
        let dateAsDictionnary = dateSplitToDictionnaire(date);
        if (dateAsDictionnary === null) {
            //Afficher message date entrée n'est pas au format "dd/mm/aaaa"
            console.log("Erreur1! La date entrée n'existe pas.");
            return false;
        }
        else {
            //Appel de isNotANumber(date) pour afficher si les valeurs de la date (jours, mois, année) sont des nombres
            if (isNotANumber(dateAsDictionnary)) {
                //Afficher message date entrée n'est pas au format "dd/mm/aaaa"
                console.log("Erreur2! La date entrée n'existe pas.");
                return false;
            }
            else {
                //Appel de isNotANumber(date) pour afficher si la date est valide ou non
                if(date_non_valide(dateAsDictionnary)) {
                    //Afficher message date entrée n'est pas au format "dd/mm/aaaa"
                    console.log("Erreur3! La date entrée n'existe pas.");
                    return false;
                }
                else {
                    //Appel de is_valid_year(date) pour afficher si la date est bissextile et valide ou non
                    if (is_valid_year(dateAsDictionnary))
                        return true;
                    else {
                        //Afficher message date entrée n'est pas au format "dd/mm/aaaa"
                        console.log("Erreur 4! La date entrée n'existe pas.");
                        return false;
                    }
                }
            }
        }
    }
}

//Étape 2 la fonction isPalindrome prend une date en string en paramètre et retourne un booléen qui indique
// si la date est un palindrome.
// (Ex : de date palindrome: 11/02/2011. Les caractères / ne sont pas pris en compte.)
function isPalindrome(date) {
    //Cas de false c-à-d (early exit) :
    // Si la date est invalide, retourner false.
    if (isValidDAte(date) === false)
        return false
    else {
        //Créer palindrome pour dire si une date est palindrome ou non


        let palindrome;
        // Sinon retourner palindrome = true
        return palindrome;
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Tests et appels des fonctions:

//Pour l'étape 1 :
// isValidDate("03/04/2001") // true
// isValidDate("03/14/2001") // false car 14 n'est pas un mois valide
let date_a_validee = "29/02/2000";
let date_valide = isValidDAte(date_a_validee);
console.log(date_valide);

//Pour l'étape 2 :
// isPalindrome("11/02/2011") // true
// isPalindrome("03/04/2001") // false