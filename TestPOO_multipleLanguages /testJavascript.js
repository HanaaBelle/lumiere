function creerNouvellePersonne(nom) {
    let personne = {};
    personne.nom = nomPersonne;
    personne.introduce = function() {
        alert('Salut ! Je m\'appelle ' + nomPersonne + '.');
    };
    return personne;
}

let hanaa = creerNouvellePersonne('Hanâa');
hanaa.nom;
hanaa.introduce();
function creerNouvellePersonne(nom) {
    let personne = {};
    personne.nom = nomPersonne;
    personne.introduce = function() {
        alert('Salut ! Je m\'appelle ' + nomPersonne + '.');
    };
    return personne;
}

let hanaa = creerNouvellePersonne('Hanâa');
hanaa.nom;
hanaa.introduce();