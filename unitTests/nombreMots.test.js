const nombreMots = require('./nombreMots');

// test 1
test('Le message correct est : bonjour à toute la promo', () => {
    expect(nombreMots("bonjour à toute la promo")).toBe(5);
})

// test 2
test('Le message correct est : ada tech school', () => {
    expect(nombreMots("ada tech school")).toBe(3);
})

// test 3
// "J" doit-il être compté comme un mot, où fait-il parti de "J'aime" ?
//test('Le message correct est : J\'aime le code', () => {
    //expect(nombreMots("J'aime le code")).toBe("J'aime le code");
//})

// test 4
// Les mots avec un tiret sont-ils compté comme un ou deux mots ?
//test('Le message correct est : Allons pique-niquer', () => {
   // expect(nombreMots("Allons pique-niquer")).toBe("Allons pique-niquer");
//})

// test 5
// "!" doit-il être compté comme un mot ?
//test('Le message correct est : Super !', () => {
  //  expect(nombreMots("Super !")).toBe("Super !");
//})


// test 6
// Que se passe-t-il si un utilisateur omet un espace après un point "." ?
//test('Super.En avant.', () => {
   // expect(nombreMots("Super.En avant.")).toBe("Super.En avant.");
//})