// On utilise les boucles et les imbrications de boucles pour construire un beau sapin, roi des forêts 🎄.
// On peut faire autant d’étapes qu'on le souhaite, mais il faut rester dans l’ordre suggéré.
// Faire un maximum de fonctions pour organiser mon code.
//
// Etape : 1
// Fonction "sapin", qui prend en entrée un nombre entier et qui affiche un sapin, avec la logique suivante :
// sapin(1) affiche à l'écran :
//   +
//  /*\
// /***\
//
// sapin(2) affiche à l'écran :
//
//    +
//   /*\
//  /***\
// /*****\
//
// sapin(5) affiche à l'écran :
//       +
//      /*\
//     /***\
//    /*****\
//   /*******\
//  /*********\
// /***********\

function init_sapin(nombre) {
    // 1 - Déclaration des données d'entrées :
    let arbre = "";
    // l'arbre contient un head avec un "  +"
    let head = '+\n';
    // l'arbre contient un chest avec un " /*"
    let chest = '/*\\\n';
    let body = "/***\\\n";
    // l'espace à ajouter aux head, chest et body
    let espace = " ";

    for (let i = 0; i <= 2; i++){
        head = head.replace("",espace);
    }
    console.

    for (let i = 0; i < nombre; i++) {
        head = head.replace("", espace);
        chest = chest.replace("", espace);
        body = body.replace("", espace);
        arbre = head.concat(chest, body);
    }
    return arbre;
}

function create_body_up(nombre) {
    // 1 - Déclaration des données d'entrées :
    let body = "/*";
    // l'antislash fermant de la chaine de caractère body
    let anti_slash = "\\\n"
    // les étoiles à ajouter aux chest et body
    let etoiles = "**";
    // l'espace à ajouter aux head, chest et body
    let espace = " ";

    for (let i = 0; i <= nombre+1; i++) {
        body = body.concat(etoiles);
    }
    body = body.concat(anti_slash);
    body = body.replace("", espace.repeat(nbr_max_espace));
    nbr_max_espace--;
    return body;
}

function create_body_down(nombre){
    // 1 - Déclaration des données d'entrées :
    let body = "";

    for (let i = 0; i < nombre-1; i++) {
        body = body.concat(create_body_up(i));
    }
    return body;
}

function create_sapin(nombre) {
    // 1 - Déclaration des données d'entrées :
    let arbre = "";

    if (nombre <= 0) {
        console.log("Erreur ! L'arbre n'existe pas.");
        return undefined;
    }
    else if (nombre === 1) {
        return init_sapin(nombre);
    }
    else {
        arbre = arbre.concat(init_sapin(nombre), create_body_down(nombre));
        return arbre;
    }
}
// 2 - Les données de sorties :
let nombre =50;
let nbr_max_espace = nombre-1;
let sapin_noel = create_sapin(nombre);

console.log(sapin_noel);

/*
*
*                                      ────────────────┐
                                     x               │
                                     x  xxx          │
                                     x xx   xx xxxxx │
                                     ┼ x            x│
                                     xxx             x
                                     xx              x
                                     xx              x
                                     xx              │x
              xxx                    xx              │x
            xx  │ xxx                xx              │x
           xx   │   xx               xx              xx
          xx    │    x             ┼x┼x───────────   x
         xx x xxxxxx  x             xxx             xx
        xx  xxxx│x  x xx            x│x             x│
       x  xxx xx│xxx    x            │x             x│
      x         │        x           │x             x│
     x xx x x xx│x xxxx   x          │x            xx│
    x     xx x  x  x  x x xxx        xxxxxxxxxxxxxxx─┘
   x            │          xx
  xx xx x  x  x │x x xxxx    x
xx              │            x
xxxxx     xxx x x  x x xxx    x
     xxx xxxxxxxxxxx           x
                │   xxxxxxxxxxxxx
                │
             xxxxxx

             xxxxxxxx

              xxxxxx
*
*
*
* */