function tri(numbers, order) {
    // Vérifier que le paramètre "order" est valide
    if (order !== "asc" && order !== "desc") {
        throw new Error('Le paramètre "order" doit être "asc" ou "desc".');
    }

    // Tri avec un comparateur personnalisé
    numbers.sort(function(a, b) {
        if (order === "asc") {
            return a - b;        // ordre croissant
        } else {
            return b - a;        // ordre décroissant
        }
    });

    return numbers;
}
