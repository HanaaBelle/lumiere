function calculatePgcd(x, y) {
    let permut;
    let p;
    if (x <= 0 || y <= 0) {
        console.log("Erreur ! Les valeurs entrées sont nulles.");
        return undefined;
    } else if (x < y) {
        permut = x;
        x = y;
        y = permut;
    }
    if ((x % y) === 0) {
        p = y;
    }
    else {
            while ((x % y) !== 0) {
                p = y;
                y = x % y;
                x = p;
            }
            p = y;
        }
        return p;
}

    module.exports = calculatePgcd