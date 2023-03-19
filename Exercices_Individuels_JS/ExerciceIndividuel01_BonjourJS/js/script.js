
function askName() {
    let demanderNom = prompt("Bonjour ! Entrez votre Nom :");

    console.log("Bonjour" + " " + demanderNom + " 👋");

    //document.getElementById("Demander-le-Nom").innerHTML = demanderNom;
    //console.log(document.getElementById("Demander-le-Nom").innerHTML = demanderNom);

    document.body.innerHTML += "<h2>" + " " + demanderNom + " " + " </h2>";
    //console.log(document.body.innerHTML += "<h2>" + " " + demanderNom + " " + " </h2>");
}

function askBirthYear() {
    let demanderAnnee = prompt("Entrez votre Année de Naissance :");

    let anneeDemande = parseInt(demanderAnnee);

    return anneeDemande;
}

function afficherAge(anneeNaissance) {
     
    let ageDemande = 2023 - anneeNaissance;

    //document.getElementById("Demander-l-Age").innerHTML = ageDemande;
    //console.log(document.getElementById("Demander-l-Age").innerHTML = "Vous avez " + ageDemande + " ans");

    document.body.innerHTML += "<h3>" + "Vous avez " + ageDemande + " ans" + " </h3>";
    //console.log(document.body.innerHTML += "<h3>" + " " + ageDemande + " " + " </h3>");
}

askName();

function verifierMois() {

    let mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    let demanderMois = prompt("Entrez votre mois de Naissance :");
    let trouve = false;
    let iterator = 0;
    while (trouve && iterator < mois.length) {
        if (demanderMois == mois[index]) {
            trouve = true;
        }
        else {
            iterator++;
        }
    }
    return demanderMois;
}

function askBirthDay() {

    let demanderJour = prompt("Entrez votre Jour de Naissance :");

    let jourDemande = parseInt(demanderJour);

    let demanderMois = verifierMois();
    
    let anneeDemande = askBirthYear();

    afficherAge(anneeDemande);

    document.body.innerHTML += "<h4>" + "Votre date de naissance : " + jourDemande + " / " + demanderMois + " / " + anneeDemande + "</h4>";
    //console.log(document.body.innerHTML += "<h4>" + "Votre date de naissance : " + jourDemande + " / " + demanderMois + " / " + demanderAnnee + "</h4>");
}

askBirthDay();

