// Fonction pour vérifier si un nombre est premier
function estPremier(n) {
  // 1. On vérifie que c'est bien un entier positif > 1
  if (!Number.isInteger(n) || n <= 1) return false;

  // 2. Cas particuliers
  if (n === 2) return true;     // 2 est premier
  if (n % 2 === 0) return false; // tous les pairs > 2 ne sont pas premiers

  // 3. On teste seulement les nombres impairs jusqu'à la racine carrée
  const max = Math.sqrt(n);
  for (let i = 3; i <= max; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}

// Fonction principale
function sommeNombresPremiers(a, b) {
  if (estPremier(a) && estPremier(b)) {
    return a + b;
  }
  return false;
}
