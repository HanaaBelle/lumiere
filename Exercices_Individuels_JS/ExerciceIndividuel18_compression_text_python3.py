texte = "généralement, on utilise un texte en faux latin ( le texte ne veut rien dire, il a été modifié ), le lorem ipsum ou lipsum, qui permet donc de faire office de texte d'attente. l'avantage de le mettre en latin est que l'opérateur sait au premier coup d'oeil que la page contenant ces lignes n'est pas valide, et surtout l'attention du client n'est pas dérangée par le contenu, il demeure concentré seulement sur l'aspect graphique. ce texte a pour autre avantage d'utiliser des mots de longueur variable, essayant de simuler une occupation normale. la méthode simpliste consistant à copier-coller un court texte plusieurs fois ( « ceci est un faux-texte ceci est un faux-texte ceci est un faux-texte ceci est un faux-texte ceci est un faux-texte » ) a l'inconvénient de ne pas permettre une juste appréciation typographique du résultat final. il circule des centaines de versions différentes du lorem ipsum, mais ce texte aurait originellement été tiré de l'ouvrage de cicéron, de finibus bonorum et malorum ( liber primus ), texte populaire à cette époque, dont l'une des premières phrases est : « neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... » ( « il n'existe personne qui aime la souffrance pour elle-même, ni qui la recherche ni qui la veuille pour ce qu'elle est... » ). expert en utilisabilité des sites web et des logiciels, jakob nielsen souligne que l'une des limites de l'utilisation du faux-texte dans la conception de sites web est que ce texte n'étant jamais lu, il ne permet pas de vérifier sa lisibilité effective. la lecture à l'écran étant plus difficile, cet aspect est pourtant essentiel. nielsen préconise donc l'utilisation de textes représentatifs plutôt que du lorem ipsum. on peut aussi faire remarquer que les formules conçues avec du faux-texte ont tendance à sous-estimer l'espace nécessaire à une titraille immédiatement intelligible, ce qui oblige les rédactions à formuler ensuite des titres simplificateurs, voire inexacts, pour ne pas dépasser l'espace imparti. contrairement à une idée répandue, le faux-texte ne donne même pas un aperçu réaliste du gris typographique, en particulier dans le cas des textes justifiés : en effet, les mots fictifs employés dans le faux-texte ne faisant évidemment pas partie des dictionnaires des logiciels de pao, les programmes de césure ne peuvent pas effectuer leur travail habituel sur de tels textes. par conséquent, l'interlettrage du faux-texte sera toujours quelque peu supérieur à ce qu'il aurait été avec un texte réel, qui présentera donc un aspect plus sombre et moins lisible que le faux-texte avec lequel le graphiste a effectué ses essais. un vrai texte pose aussi des problèmes de lisibilité spécifiques ( noms propres, numéros de téléphone, retours à la ligne fréquents, composition des citations en italiques, intertitres de plus de deux lignes ... ) qu'on n'observe jamais dans le faux-texte."
# print (texte)

# Etape 1 - Découper et reconstruire le texte

# Découpage
# Transformer le texte pour le rendre plus facilement manipulable.
# Créez une fonction A (donnez-lui le nom que vous voulez, c'est simplement pour y faire référence dans cet exercice) 
# prenant en paramètre ce texte (ou tout autre chaîne de caractères) et retourne une liste de mots.
# Nous définissons un mot comme un ensemble de caractères, quels qu'ils soient, à l'exception des espaces, qui séparent 
# les mots entre eux.
def decoupeTexte(texte):
   tabMots = texte.split() 
   #listeMots = texte.splitlines()
   return tabMots

texteDecoupe = decoupeTexte(texte)
# print(texteDecoupe)

# Reconstruction
# Créez également une fonction B prenant en paramètre une liste de mots, et retournant une chaîne de caractère 
# composée de l'ensemble des mots dans l'ordre, séparés par un espace.
# Cette fonction est "l'inverse" de la fonction A créée à l'étape Découpage : actuellement, sans aucune modification 
# des mots, elle vous permet de reformer le texte originel à partir du résultat de la fonction A.

def reconstruitTexte(listeMots):
   texteReconstruit = " ".join(listeMots)
   return texteReconstruit

texteReconstruit = reconstruitTexte(texteDecoupe)
#print(texteReconstruit)

# Etape 2 - Compression avec dictionnaire fixe
# Remplacer certains mots du texte par des références.
# Nous utiliserons le dictionnaire suivant :

dictionnaireMots = {'texte': '1',
 'lorem': '2',
 'qui': '3',
 'donc': '4',
 'est': '5',
 'que': '6',
 'pour': '7',
 'ceci': '8',
 'faux-texte': '9',
 'dans': '10',
 'plus': '11',
 'avec': '12'}

# Créez une fonction C prenant en paramètre une liste de mots et un dictionnaire.
# Pour chaque mot dans la liste, si le mot existe dans le dictionnaire en tant que clef, remplacez-le par la valeur associée.
# Par exemple, avec le dictionnaire précédent et la liste ['mais', 'ceci', 'est', 'un', 'long', 'faux-texte'], 
# la fonction doit retourner ['mais', '8', '5', 'un', 'long', '9'].

def remplacerMotsParReferences(listeMots, dictionnaire):
   nouvelleListe = []
   for i in range(len(listeMots)):
      mot = listeMots[i]
      # if (dictionnaire[listeMots[i]]):
      if (mot in dictionnaire.keys()):
         nouvelleListe.append(dictionnaire[mot])
      else:
         nouvelleListe.append(mot)  
   return nouvelleListe

listeMotsCompresses = remplacerMotsParReferences(texteDecoupe, dictionnaireMots)
# print(listeMotsCompresses)            

# Vous pouvez maintenant enchaîner vos fonctions A, C et B pour produire un nouveau texte :
# A divise le texte originel en liste de mots,
# C remplace certains de ces mots par les références du dictionnaire,
# B récupère la liste de mots et reconstruit un texte complet.

def compresserTexte(texte, dictionnaire):
   # on decoupe notre texte
   texteDecoupe = decoupeTexte(texte)
   # on remplace certains mots par leurs références
   listeMotsRemplaces = remplacerMotsParReferences(texteDecoupe, dictionnaire)
   # on reconstruit notre texte
   texteCompresse = reconstruitTexte(listeMotsRemplaces)
   return texteCompresse

texteCompresse = compresserTexte(texte, dictionnaireMots)
print(texteCompresse)   

