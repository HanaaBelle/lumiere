//////  Pimp My Ride - Part I

// Les clients me communiquent en plus de leur nom, des heures de départs, des durées de trajet,
// le montant payé pour faire ce trajet.
// Ces informations sont stockées sous forme d'une chaîne de caractères par lignes composées de mots.

// Étape 1 - Parsing
// Fonction parseTrip(trip) prend une ligne du même format que les lignes de cette exemple : "Perdita 8h 10h 8Euro";

function parseTrip(trip) {
    // TODO

    // La fonction parseTrips(trip) décompose en mot la chaine de caractère trip (séparés par un espace);
    const mot = trip.split(' ');

    // Puis range ces mots dans une structure de donnée : un "dictionnaire" :
    // enregistrements =
    // { 'client': <nom_du_client>, 'start': <heure_de_depart_du_vol>, 'duration': <let duree_du_vol>,
    // 'price': <prix> }; avec l'idée de { 'clé' : 'valeur' }

    let enregistrement = new Map();
    for (let i = 0; i < mots_cles_des_enregistrement_du_vol.length; i++) {
        // Sachant que mots_cles_des_enregistrement_du_vol.length = trip.length
        // (les deux tableaux on le même nombre d'éléments)
        // et puisque :
        // let nom_du_client = mot[0]; let heure_de_depart_du_vol = mot[1];
        // let duree_du_vol = mot[2]; let prix = [3];

        // L'idée c'est d'établir une correspondance entre
        // chaque mots clés du tableau mots_cles_des_enregistrement_du_vol
        // et les valeurs stockées en mots dans le tableau trip (chaine de caractère).
        enregistrement.set(mots_cles_des_enregistrement_du_vol[i], mot[i]);
    }
    return enregistrement;
}

// Étape 2 - Loop Parsing :
// Appler la fonction `parseTrip(trip)` dans la fonction `parseTrips(trips)` qui prend en entrée une journée complète
// (donc plusieurs lignes) ce qui définit le nombre d'éléments du tableau et donc d'itérations.
function parseTrips(trips) {
    // TODO
    // Créer la liste de structures `trips` des dictionnaires (objets) définies précédemment dans un tableau :
    //"liste_des_enregistrements_par_jour" de dictionnaires :
    // (`[{'clé': 'valeur', 'clé': 'valeur', 'clé': 'valeur'}, {'clé': 'valeur', 'clé': 'valeur', 'clé': 'valeur'},
    // {'clé': 'valeur', 'clé': 'valeur', 'clé': 'valeur'},..., {'clé': 'valeur', 'clé': 'valeur', 'clé': 'valeur'}]`).

    let liste_des_enregistrements_par_jour = [];
    for (let i = 0; i < trips.length; i++) {
        liste_des_enregistrements_par_jour.push(parseTrip(trips[i]));
    }
    // et retourne cette liste [
    // 	{'client': 'Roger', 'start': 0, 'duration': 5, 'price': 10},
    // 	{'client': 'Pongo', 'start': 3, 'duration': 7, 'price': 14},
    // 	{'client': 'Perdita', 'start': 8, 'duration': 10, 'price': 8},
    // 	{'client': 'Anita', 'start': 16, 'duration': 3, 'price': 7}
    // ]
    return liste_des_enregistrements_par_jour;
}

// Étape 3 - Prices
// La fonction `getTripsPrice` calcule l'enchaînement de clients les plus intéressants financièrement.

function getTripsPrice(voyages) {
    // La fonction accepte en argument une liste de `voyages` par exemeple :

    // liste_des_voyages = [ {'client': 'Roger', 'start': 0, 'duration': 5, 'price': 10},
    // {'client': 'Pongo', 'start': 3, 'duration': 7, 'price': 14} ]);
    // Lors de l'appel de la fonction : getTripsPrice(liste_des_voyages);
    // La fonction retourne : 10 + 14 = 24.
    //let totalPrice = getTripsPrice(...); console.log(totalPrice) # doit afficher 24

    let total_des_prix_des_voyages = 0;
    for (let i = 0; i < voyages.length; i++) {
        let voyage = voyages[i];
        for (let [cle, valeur] of voyage) {
            if (cle === "price") {
                total_des_prix_des_voyages += parseInt(valeur);
            }
        }
        // Ou faire directement après la 1ère boucle for :
        // total_des_prix_des_voyages += parseInt(voyages[i].get('price'));
    }
    // Puis elle retourne la somme des prix de cet ensemble de `voyages`.
    return total_des_prix_des_voyages;
}

// Étape 4 - Compatibility
// Il ne faut évidemment pas que l'heure d'arrivée d'un trajet chevauche l'heure de départ d'un autre !
// Votre client en retard ne paiera pas.
// C'est de déterminer si un vol (représenté par une structure `trips`) n'empiète pas sur les horaires d'un autre.
// La fonction `checkCompatibility(tripA, tripB)` comparent deux structures `voyages` et retourne un booléen
// (compatible initialisé à false) il détermine si les structures sont compatibles (true) ou non (false).
function checkCompatibility(tripA, tripB) {

    // La fonction checkCompatibility(tripA,tripB) compare entre la valeur de l'heure d'arrivée
    // du volA = ('start' + 'duration') avec la valeur de 'start' du 2ème vol par exemple :

    // checkCompatibility({'client': 'Roger', 'start': 0, 'duration': 5, 'price': 10},
    // {'client': 'Pongo', 'start': 3, 'duration': 7, 'price': 14})
    //Doit retourner faux car le premier vol n'atterrit qu'à 5h, ce qui est incompatible avec le départ du second à 3h.
    //checkCompatibility({'client': 'Roger', 'start': 0, 'duration': 5, 'price: 10},
    // {'client': 'Perdita', 'start': 8, 'duration': 10, 'price: 8}) . Doit retourner vrai.

    let compatible = false;
    let heure_arrivee_volA = parseInt(tripA.get('start')) + parseInt(tripA.get('duration'));
    let heure_depart_vol_B = parseInt(tripB.get('start'));

    if (heure_arrivee_volA >= heure_depart_vol_B)
        return compatible = true;
    else
        return compatible = false;
}

// Étape 5 - Possibilities
// Développez une fonction `findCompatibilities(trips)` qui retourne, à partir d'une liste de **voyages**,
// tous les ensembles de voyages compatibles les uns avec les autres.
// En partant de l'exemple original, cette fonction retournerait alors :
//[
//
// 	[ {'client': 'Roger', 'start': 0, 'duration': 5, 'price': 10} ],
//
// 	[ {'client': 'Pongo', 'start': 3, 'duration': 7, 'price': 14} ],
//
// 	[ {'client': 'Perdita', 'start': 8, 'duration': 10, 'price': 8} ],
//
// 	[ {'client': 'Anita', 'start': 16, 'duration': 3, 'price': 7} ],
//
// 	[ {'client': 'Roger', 'start': 0, 'duration': 5, 'price': 10},
// 	{'client': 'Perdita', 'start': 8, 'duration': 10, 'price: 8} ],
//
// 	[ {'client': 'Roger', 'start': 0, 'duration': 5, 'price': 10},
// 	{'client': 'Anita', 'start': 16, 'duration': 3, 'price: 7} ],
//
// 	[ {'client': 'Pongo', 'start': 3, 'duration': 7, 'price': 14},
// 	{'client': 'Anita', 'start': 16, 'duration': 3, 'price: 7} ],
//
// ]

function findCompatibilities(trips) {
    //La fonction `findCompatibilities(trips)`appelle la fonction `checkCompatibility(tripA, tripB)` et retourne
    // ensembles_de_voyages_compatibles en affichant dans un 1er temps Chaque voyage qui est bien sûr compatible
    // avec lui-même et dans un 2ème temps seulement les couples de vols compatibles

    let ensembles_de_voyages_compatibles = [];
    //Pour comparer deux structures il faut avant tout affecter à chacune des structures tripA et tripB un dictionnaire.
    // La fonction récupère les deux dictionnaire tripA et tripB en affectant à chacun la valeur de l'élément i et j
    // du tableau trips et les affiche par console.log
    for (let i = 0; i < trips.length - 1; i++) {
        let tripA = trips[i];
        for (let j = i + 1; j < trips.length; j++) {
            let tripB = trips[j];
            if (checkCompatibility(tripA, tripB) === true) {
                ensembles_de_voyages_compatibles.push(tripA);
                ensembles_de_voyages_compatibles.push(tripB);
                console.log("\nLe Vol numéro: " + i + " empiète l'horaire du Vol numéro: " + j);
                console.log("TripA", tripA);
                console.log("TripB", tripB);}
            else
                console.log("\nLes deux Vols numéro: " + i + " et numéro: " + j + " ne s'empiètent pas !");
            }
        }
    return ensembles_de_voyages_compatibles;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Ajout d'une liste de "mots_cles_enregistrement_vol" en forme de tableau:
const mots_cles_des_enregistrement_du_vol = ['client', 'start', 'duration', 'price'];

// Pour l'étape 1 la cliente "Perdita" veut partir à "8h" pour un vol de "10h" (donc arrivée à 18h) et paiera "8Euro".
// let tripToParse = "Perdita 8H 10H 8Euro"
// console.log(parseTrip(tripToParse));

// Pour l'étape 2 on a une liste de clients par jour.
let tripsToParse = [
    "Roger 0 5 10",
    "Pongo 3 7 14",
    "Perdita 8 10 8",
    "Anita 16 3 7"
]
let liste_des_voyages = parseTrips(tripsToParse);

let total_des_prix = getTripsPrice(liste_des_voyages);
console.log("Le total des prix est égal à :", total_des_prix);

findCompatibilities(liste_des_voyages);
