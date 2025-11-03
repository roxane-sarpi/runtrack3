function bisextile(annee) {
    // Une année est bissextile si :
    // - divisible par 4
    // - non divisible par 100, sauf si elle est divisible par 400
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Exemple de test dans la console
console.log("2024 est bissextile ?", bisextile(2024)); // true
console.log("2100 est bissextile ?", bisextile(2100)); // false
console.log("2000 est bissextile ?", bisextile(2000)); // true
