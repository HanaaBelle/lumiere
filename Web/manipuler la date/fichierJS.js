// Déclaration de l'objet Date :

let date_actuelle = new Date("2023-03-20T11:48:00Z");

console.log(date_actuelle);
date_actuelle.setFullYear(2018);

//console.log(date_actuelle);
console.log(date_actuelle.getDate()); //Pour récupérer le jour
console.log(date_actuelle.getMonth()+1); // Pour récupérer le Mois de 0 à 11
console.log(date_actuelle.getFullYear()); // Pour récupérer l'année
console.log(date_actuelle.getHours()); // Pour récupérer l'heure
console.log(date_actuelle.getMinutes()); // Pour récupérer les minutes
console.log(date_actuelle.getSeconds()); // Pour récupérer les secondes
console.log(date_actuelle.getMilliseconds()); // Pour récupérer les milliseconds

//console.log(date_actuelle.toString()); //GMT+0100 (Central European Standard Time)
console.log(date_actuelle.toUTCString()); //GMT
console.log(date_actuelle.toDateString()); //Juste la date sans l'heure

// L'utilisation de la fonction setInterval :
function refreshTime() {
    let temps_courant = document.getElementById("temps-actuel");
    let date_actuelle = new Date();
    temps_courant.innerHTML =
        date_actuelle.getHours() + ":"
        + date_actuelle.getMinutes() + ":"
        + date_actuelle.getSeconds();
}

refreshTime();
let compteurTemps = setInterval(refreshTime, 1000); // 1000ms <=> 1s
document.getElementById("stop").addEventListener("click", function() {
    clearInterval(compteurTemps);
});
document.getElementById("start").addEventListener("click", function() {
    refreshTime();
    compteurTemps = setInterval(refreshTime, 1000); // 1000ms <=> 1s
});

// L'utilisation de la fonction setTimeout :
let timeout = setTimeout(function() {
    console.log("Salut ! Je suis en retard...");
}, 3000);
clearTimeout(timeout);
console.log("Hello!");