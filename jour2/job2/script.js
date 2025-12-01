function showhide() {
    // On cherche si l'article existe déjà
    let article = document.getElementById('citation');

    if (article) {
        // S'il existe, on le supprime (disparition)
        article.remove();
    } else {
        // Sinon, on le crée (apparition)
        article = document.createElement('article');
        article.id = 'citation';
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";

        // On l'ajoute à la page (à la fin du body)
        document.body.appendChild(article);
    }
}

// Quand le DOM est chargé, on branche le clic du bouton sur showhide()
document.addEventListener('DOMContentLoaded', function () {
    let btn = document.getElementById('button');
    if (btn) {
        btn.addEventListener('click', showhide);
    } else {
        console.error('Bouton #button introuvable');
    }
});
