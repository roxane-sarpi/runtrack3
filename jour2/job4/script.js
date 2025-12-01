document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('keylogger');

    document.addEventListener('keypress', function(event) {
        // Récupère la lettre tapée
        const key = event.key.toLowerCase();
        
        // Vérifie si c'est une lettre de a à z
        if (key.length === 1 && key >= 'a' && key <= 'z') {
            // Vérifie si le focus est sur le textarea
            const isFocused = document.activeElement === textarea;
            
            if (isFocused) {
                // Si le focus est sur le textarea, ajoute la lettre deux fois
                textarea.value += key + key;
                // Empêche le comportement par défaut pour éviter d'ajouter la lettre une 3ème fois
                event.preventDefault();
            } else {
                // Si le focus n'est pas sur le textarea, ajoute la lettre une fois
                textarea.value += key;
            }
        }
    });
});