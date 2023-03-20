// Faire un compte à rebours
const monTimeout_compteur = setInterval(fct_compte_a_rebours, 1000);
function stopFonction() {
    clearTimeout(monTimeout_compteur);
}

// fonction monCoucou() fait apparaitre Coucou après 7 secondes
function monCoucou() {
    const coucou = document.getElementById("coucou").innerHTML = "Coucou !"; //<h2>
}

// setTimeout attend 8 secondes avant d'exécuter monCoucou 
const monTimeout_coucou = setTimeout(monCoucou, 9000);

// fonction fct_compte_a_rebours() affiche un compte à rebours de 7 secondes   
let seconde = 7;
const compte_a_rebours = document.getElementById("compteur"); //<div>

function fct_compte_a_rebours() {
    if (seconde >= 0) {
        compte_a_rebours.innerText = seconde;
        seconde--;
    }
    else {
        stopFonction();

        //et remplace le <div> du "compteur" par le <h2> du "coucou"
        //compte_a_rebours.classList.remove("oldClass");
        document.getElementById("compteur").remove();
    }
}

//initialisation du compteur à 0
compteur = 0;

let stop_compteur;
// Dès qu'on clique sur le bouton "C'est parti !" le compteur commence 
function commencer_compteur(){
    document.getElementById("minuteur").value = compteur;
    compteur++;
    stop_compteur = setTimeout(commencer_compteur, 1000);
}

// Dès qu'on clique sur le bouton "Stop !" le compteur s'arrête 
function arret_compteur(){
   document.getElementById("minuteur").value = 0;
   compteur = 0;
   clearTimeout(stop_compteur);
}

commencer_compteur()
arret_compteur()


