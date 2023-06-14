// Faire une animation infinie de changement de couleurs en random du sapin et de l'arrière-plan
const monTimeout_changeColor = setInterval(random_color, 1000);

// Fonction random_color() change la couleur de l'arrière-plan et du sapin après 7 secondes
function random_color() { //nom de la fonction
    // On commence par un symbole hexadecimal pour les deux couleurs
    let color_h1 = '#';
    let color_div = '#';

    //Mettre dans la liste des couleurs les couleurs qu'on choisira
    let colorsList = ['000000', 'FF0000', '00FF00', '0000FF', 'FFFF00', '00FFFF', 'FF00FF', 'C0C0C0'];

    // Couleur 1 & 2 sont choisies aléatoirement
    color_h1 += colorsList[Math.floor(Math.random() * colorsList.length)];
    color_div += colorsList[Math.floor(Math.random() * colorsList.length)];

    document.getElementById('pyramide-suite-conway').style.color = color_h1;

    // mettre la random color dans la balise div.
    document.getElementById('arriere_plan').style.background = color_div;
}