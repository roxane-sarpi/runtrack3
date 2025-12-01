function addone() {
    let compteur = document.getElementById('compteur');

    // On convertit le texte en nombre
    let valeur = parseInt(compteur.textContent);

    // On incrémente
    valeur++;

    // On réécrit la nouvelle valeur
    compteur.textContent = valeur;
}

// Quand la page est chargée, on relie le clic du bouton à addone()
document.addEventListener('DOMContentLoaded', function () {
    let btn = document.getElementById('button');

    if (btn) {
        btn.addEventListener('click', addone);
    } else {
        console.error('Bouton #button introuvable');
    }
});
