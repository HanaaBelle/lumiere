const pgcd = require('./pgcd');
test('Le PGCD de 36 et 45 est égal à 9', () => {
    expect(pgcd(36,45)).toBe(9);
})

test('Le PGCD de 0 et O devrait être indéfinit', () => {
    expect(pgcd(0,0)).toBeUndefined();
})

test('Le PGCD de 45 et 36 est égal à 9', () => {
    expect(pgcd(30,20)).toBe(10);
})

