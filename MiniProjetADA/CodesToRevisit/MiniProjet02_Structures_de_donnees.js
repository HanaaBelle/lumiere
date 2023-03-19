
function askOperator()
{
    let operator = (prompt('Operator'));
    
    return operator;
}

//askoperator()
const op = askOperator();

function generateCalcul(number1, op, number2) {

    switch (op) {
        case '/': return number1 / number2
            //break;
        case '*': return number1 * number2
            //break;
        case '+': return number1 + number2
            //break;
        case '/': return number1 / number2
            //break;
        default:
            break;
    }

}
if (firstValue, secondValue, operator){
    //console.log(generateCalcul(firstValue,operator,secondValue));
    let total = generateCalcul(firstValue,operator,secondValue);
    alert(total);
}

function generateCalcul2() {
    let number1 = askFirstNumber();
    let number2 = askSecondNumber();
    const op = askOperator();
}

console.log('coucou')
function askFirstNumber() {
    let firstValue = parseInt(prompt('First value'))
    console.log(typeof firstValue)
    return firstValue ? firstValue : askFirstNumber();
}
const firstNumber = askFirstNumber()
function askOperator() {
    let operator = prompt('Operator')
    return operator;
}
const operator = askOperator();
function askSecondNumber() {
    let secondValue = parseInt(prompt('Second value'))
    return secondValue ? secondValue : askSecondNumber();
}
const secondValue = askSecondNumber()
function generateCalcul(number1, op, number2) {
    switch (op) {
        case '/': return number1 / number2
        case '*': return number1 * number2
        case '+': return number1 + number2
        case '-': return number1 - number2
        default:
            break;
    }
}
if (firstNumber, secondValue, operator) {
    console.log(firstNumber, secondValue, operator)
    let total = generateCalcul(firstNumber, operator, secondValue)
    alert(total)
}







//En JS ou Python, implémenter (on nous demande toujours une fonction) un *bubble sort* triant cette liste de 20 entiers :
    
let tableau [2, 54, 7, 38, 22, 13, 19, 45, 31, 77, 98, 5, 12, 28, 81, 26, 72, 4, 20, 42].
    
//Ecrire une fonction qui prend deux listes en arguments et retourne un dictionnaire 
//ayant pour clés la première liste et pour valeurs la deuxième, en associant les clés et valeurs 
//par index de leurs listes respectives.


listeCles = [2, 7, 38, 22, 13, 19, 31, 5, 12, 28, 26, 4, 20];
listeValeurs = [54, 38, 22, 13, 19, 45, 31, 77, 9, 12, 28, 81, 26, 72, 4, 20, 42];

dictionnaire = [cles ":" valeurs];


function dictionnaire (listeCles)
return (listeCles[0], listeValeurs[0]);


const listDayNumber = [1,2,3,4,5,6,7];
const listDayString 






// - En JS implémenter un *bubble sort* triant cette liste de 20 entiers 
const al = [2, 54, 7, 38, 22, 13, 19, 45, 31, 77, 98, 5, 12, 28, 81, 26, 72, 4, 20, 42].sort((a,b) => b-a)
  console.log(al)
// - Écrire une fonction qui prend deux listes en arguments
// et retourne un dictionnaire ayant pour clés la première liste et pour valeurs la deuxième,
// en associant les clés et valeurs par index de leurs listes respectives.
const listDayNumber = [1,2,3,4,5,6,7]
const listDayString = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'].sort()
// function plop(param, param2) {
//     return { param[0] : param2[0] }
// }
// À partir d'un tableau users contenant une série de prénoms :
const users = ['Robyn', 'Dodo', 'Gaby', 'Hely'];
// Afficher les phrases suivantes suivant si il y a 0, 1, 2 ou > 2 users présents dans le array users :
// "Soyez le premier à aimer cette publication", = 0
if (users.length === 0) console.log("Soyez le premier à aimer cette publication")
// "Simon aime cette publication", = 1
if (users.length === 1) console.log(users[0] + " aime cette publication")
// "Simon et Arthur aiment cette publication", = 2
if (users.length === 2) console.log(users[0] + " et " +users[1] +" aiment cette publication")
// "Simon et X autres personnes ont aimé cette publication.", > 2
if (users.length > 2) console.log(users[Math.floor(Math.random() * users.length)] + " et "  +(users.length - 1) + " aiment cette publication")
// Petit bonus : afficher un prénom aleatoirement parmis ceux du tableau.

