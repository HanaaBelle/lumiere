//Trouver un élément avec la méthode : document.getElementsById()
const myAnchor = document.getElementById('my-anchor');

//Trouver un élément avec la méthode : document.getElementsByClassName()
const contents = document.getElementsByClassName('content');
const firstContent = contents[0];

//Trouver un élément avec la méthode : document.getElementsByTagName()
const articles = document.getElementsByTagName('article');
const thirdArticle = articles[2];

//Trouver un élément avec la méthode : document.querySelector()
const element = document.querySelector("#myId p.article > a");

//Trouver un élément avec la méthode :element.children / element.parentElement 
// element.nextElementSibling / element.previousElementSibling
const elt = document.getElementById('main');

const elements_fils = elt.children;
const element_premier_fils = elt.children[0];
const element_parent = elt.parentElement;
const element_precedent = elt.previousElementSibling;
const element_suivant = elt.nextElementSibling;

// Exercices :
//1 Récupérer le premier élément ayant pour ID "main-content" grâce à son ID
let premier_element_main_content = document.getElementById('main-content');
console.log(premier_element_main_content);

//2 Récupérer les éléments ayant pour classe "important"
let elements_class_important = document.getElementsByClassName("imortant");
console.log(elements_class_important);

//3 Récupérer les éléments de type "article"
let elements_type_articles = document.getElementsByTagName("article");
console.log(elements_type_articles);

//4 Récupérer les éléments de type "li" qui sont dans une liste "ul"
// ayant la classe "important" et cette liste doit elle-même être dans 
// un article "article"
let elements_type_li_de_lu_class_important_de_article =
  document.querySelector("article > ul.important > li");
console.log(elements_type_li_de_lu_class_important_de_article);  

//5 En reprenant le résultat 4, récupérer l'élément li suivant de la liste ul
let element_li_suivant_de_lu_class_important_de_article =
elements_type_li_de_lu_class_important_de_article.nextElementSibling;
console.log(element_li_suivant_de_lu_class_important_de_article);


//Modifiez le contenu d'un élément
let element_a_modifie = document.getElementById('main2');
element_a_modifie.innerHTML = "<ul><li>Elément 1</li><li>Elément 2</li></ul>";

console.log("------------")
console.log(document.getElementById("my_id2").innerHTML);

elt.classList.add("nouvelleClasse");    // Ajoute la classe nouvelleClasse à l'élément
elt.classList.remove("nouvelleClasse"); // Supprime la classe nouvelleClasse que l'on venait d'ajouter
elt.classList.contains("nouvelleClasse");   // Retournera false car on vient de la supprimer
elt.classList.add("oldClass");
elt.classList.replace("oldClass", "newClass"); // Remplacera oldClass par newClass si oldClass était présente sur l'élément

elt.style.color = "#fff";      // Change la couleur du texte de l'élément à blanche
elt.style.backgroundColor = "#000"; // Change la couleur de fond de l'élément en noir
elt.style.fontWeight = "bold"; // Met le texte de l'élément en gras

elt.setAttribute("type", "password");   // Change le type de l'input en un type password
elt.setAttribute("name", "my-password");    // Change le nom de l'input en my-password
elt.getAttribute("name");               // Retourne my-password





//const texte = document.getElementById("texte");
//const contenant = document.getElementById("contenant");

//function gestionnaireEvenements(event) {
//texte.addEventListener("keyup", miseAjourContenant);
//console.log('Le bouton a été cliqué !');
////}

//const button = document.getElementById('bouton')
//button.addEventListener('click', gestionnaireEvenements)

//function miseAjourContenant(event) {
//contenant.innerText = texte.value;
//}

//function basculer_texte() {
//var span = document.getElementById("span_texte");
//if (span.innerHTML != "") {
//span.innerHTML = "";
//} else {
//span.innerHTML = "texte";
//}
//}


