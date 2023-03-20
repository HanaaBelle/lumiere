class Utilisateur {
    private readonly nom: string;
    private readonly age: number;
    public constructor(nom: string, age: number) {
        this.nom = nom;
        this.age = age;
    }
    public avoirNom() {
        return this.nom;
    }
    public avoirAge() {
        return this.age;
    }
    //Faire une méthode birthday qui affiche « Joyeux anniversaire [name] ! ».
    public anniversaire(){
        return this.avoirNom();
    }
}

let personne = new Utilisateur('Hanaa',35);

console.log(`${personne.avoirNom()} a ${personne.avoirAge()} ans`);

console.log(`Joyeux anniversaire ${personne.anniversaire()} !`)

