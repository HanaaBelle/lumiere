// Prochain plus grand nombre avec les mêmes chiffres :
// Créez une fonction qui prend un entier positif et renvoie le prochain plus grand nombre qui peut être formé en
// réorganisant ses chiffres. Par exemple :

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071

// Si les chiffres ne peuvent pas être réarrangés pour former un nombre plus grand, retournez -1
// (ou nil en Swift, None en Rust) :
//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

function nextBigger(nombre) {
    let numberToString = nombre.toString();
    let tableau_chiffres = numberToString.split("");
    let nouvelle_chaine_de_chiffres = "";

    if (nombre < 12) {
        return "coucou1" + -1;

    } else if (nombre < 100) {
        if(tableau_chiffres[0] < tableau_chiffres[1]){
            let permutation = tableau_chiffres[0];
            tableau_chiffres[0] = tableau_chiffres[1];
            tableau_chiffres[1] = permutation;
        }
        else {
            return -1;
        }

    } else {
        // Trouver le premier chiffre de droite à gauche qui est plus petit que le chiffre à sa droite.
        let i = 
        while (){

        }



        let chiffre_pivot = tableau_chiffres[tableau_chiffres.length - 1];
        //console.log(chiffre_pivot);
        let plus_petit_que_pivot_de = chiffre_pivot - tableau_chiffres[tableau_chiffres.length - 2];
        //console.log(plus_petit_que_pivot_de);
        let index_du_plus_petit_que_pivot = tableau_chiffres.length - 2;
        console.log(index_du_plus_petit_que_pivot);
        let chiffre_precedent_direct_exist = false;

        for (let i = tableau_chiffres.length - 2; i >= 0; i--) {
            let peut_etre_plus_petit_que_pivot_de = chiffre_pivot - tableau_chiffres[i];
            console.log("plus petit", plus_petit_que_pivot_de);

            if (plus_petit_que_pivot_de > peut_etre_plus_petit_que_pivot_de) {
                index_du_plus_petit_que_pivot = tableau_chiffres[i];
                plus_petit_que_pivot_de = peut_etre_plus_petit_que_pivot_de;
                chiffre_precedent_direct_exist = true;
            }
        }
        console.log(index_du_plus_petit_que_pivot);

        if (chiffre_precedent_direct_exist === true) {
            console.log("hey")
            let permutation = tableau_chiffres[tableau_chiffres.length - 1]
            tableau_chiffres[tableau_chiffres.length - 1] = tableau_chiffres[index_du_plus_petit_que_pivot];
            tableau_chiffres[index_du_plus_petit_que_pivot] = permutation;
        }
        else {
            console.log("hi")
        }

    }
    nouvelle_chaine_de_chiffres = tableau_chiffres.join("");
    if (parseInt(nouvelle_chaine_de_chiffres) > nombre) {
        return nouvelle_chaine_de_chiffres;
    } else {
        return nouvelle_chaine_de_chiffres;
    }
}

let nombre = 12345;

let resultat = nextBigger(nombre);

console.log(resultat);




