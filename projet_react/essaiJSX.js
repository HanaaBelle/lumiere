
//1 Ça s’appelle du JSX, et c’est une extension syntaxique de JavaScript.
const element1 = <h1>Bonjour, monde !</h1>;

//2 Dans l’exemple suivant, nous déclarons une variable appelée name et nous l’utilisons ensuite
// dans JSX en l’encadrant avec des accolades :
const name = 'Hanâa BELHAMIDI';
const element2 = <h1>Bonjour, {name}</h1>;

ReactDOM.render(
    element2,
    document.getElementById('root')
);

//3 Dans l’exemple suivant, on intègre le résultat de l’appel d’une fonction JavaScript, formatName(user),
// dans un élément <h1>.

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Hanâa',
    lastName: 'BELHAMIDI'
};

const element3 = (
    <h1>
        Bonjour, {formatName(user)} !
    </h1>
);

ReactDOM.render(
    element3,
    document.getElementById('root')
);

//4 Ça signifie que vous pouvez utiliser JSX à l’intérieur d’instructions if ou de boucles for,
// l’affecter à des variables, l’accepter en tant qu’argument, et le renvoyer depuis des fonctions :
function getGreeting(user) {
    if (user) {
        return <h1>Bonjour, {formatName(user)} !</h1>;
    }
    return <h1>Bonjour, Belle Inconnue.</h1>;
}

//5 Vous pouvez utiliser des guillemets pour spécifier des littéraux et chaînes de caractères dans les attributs :
const element5 = <div tabIndex="0"></div>;

//6 Vous pouvez aussi utiliser des accolades pour utiliser une expression JavaScript dans un attribut :
//Ne mettez pas de guillemets autour des accolades quand vous utilisez une expression JavaScript dans un attribut.
// Vous pouvez utiliser soit des guillemets (pour des valeurs textuelles) soit des accolades (pour des expressions),
// mais pas les deux à la fois pour un même attribut.
const element6 = <img src={user.avatarUrl}></img>;

//!*** Remarque : Dans la mesure où JSX est plus proche de JavaScript que de HTML,
// React DOM utilise la casse camelCase comme convention de nommage des propriétés, au lieu des noms d’attributs HTML.
// Par exemple, class devient className en JSX, et tabindex devient tabIndex.

//7 Si une balise est vide, vous pouvez la fermer immédiatement avec />, comme en XML :
const element7 = <img src={user.avatarUrl} />;

//8 Les balises JSX peuvent contenir des enfants :
const element8 = (
    <div>
        <h1>Bonjour !</h1>
        <h2>Content de te voir ici.</h2>
    </div>
);

//9 JSX empêche les attaques d’injection, vous ne risquez rien en utilisant une saisie utilisateur dans JSX :
const title = response.potentiallyMaliciousInput;
// Ceci est sans risque :
const element9 = <h1>{title}</h1>;

//10 Babel compile JSX vers des appels à React.createElement().
// Ces deux exemples sont identiques :

const element10_1 = (
    <h1 className="greeting">
        Bonjour, monde !
    </h1>
);

const element10_2 = React.createElement(
    'h1',
    {className: 'greeting'},
    'Bonjour, monde !'
);

//11 React.createElement() effectue quelques vérifications pour vous aider à écrire un code sans bug,
// mais pour l’essentiel, c'est qu'il crée un objet qui ressemble à ceci :
// Remarque : cette structure est simplifiée
const element11 = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Bonjour, monde !'
    }
};


