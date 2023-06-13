
const HeuresParJour = 24;
const MinutesParHeure = 60;
const SecondesParMinute = 60;

// =====================================

const JourInput = document.querySelector('#Jour-input');

const Heures = document.querySelector('#Heures');
const Minutes = document.querySelector('#Minutes');
const Secondes = document.querySelector('#Secondes');

const CalculerTempsButton = document.querySelector('#Calculer-Temps-button');

CalculerTempsButton.addEventListener('Click', () => {

    let Jours = JourInput.value;
    let CalculerHeures = Jours * HeuresParJour;
    let CalculerMinutes = CalculerHeures * MinutesParHeure;
    let CalculerSecondes = CalculerMinutes * SecondesParMinute;

    Heures.innerText = `${CalculerHeures} Heures`;
    Minutes.innerText = `${CalculerMinutes} Minutes`;
    Secondes.innerText = `${CalculerSecondes} Secondes`;
});