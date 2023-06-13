const plus = "+";
const espace = " ";
const etoile = "*";
const slash = "/";
const antiSlash = "\\";
const retourEnLigne = "\n";

let head = "";
let chest = "";
let body = ""
let sapin = "";
const nombre = 1;

head = head.concat(espace.repeat(nombre+1),plus,retourEnLigne);
chest = chest(espace.repeat(nombre),slash, etoile, antiSlash, retourEnLigne);
sapin = sapin.concat(head,chest, espace.repeat(nombre-1), slash, etoile.repeat(nombre+2), antiSlash, retourEnLigne);

console.log(sapin);