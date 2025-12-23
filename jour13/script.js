const searchInput = document.getElementById('search');
const resultatsDiv = document.getElementById('resultats');

searchInput.addEventListener('keyup', function() {
    let terme = this.value; 

    if (terme.length > 0) {
        // Appel AJAX vers le fichier PHP
        fetch('autocompletion.php?search=' + encodeURIComponent(terme))
            .then(response => response.text())
            .then(data => {
                resultatsDiv.innerHTML = data;
                resultatsDiv.style.display = 'block';
                
                // Ajouter les événements de clic sur les résultats
                const items = resultatsDiv.querySelectorAll('.resultat-item');
                items.forEach(item => {
                    item.addEventListener('click', function() {
                        searchInput.value = this.textContent;
                        resultatsDiv.style.display = 'none';
                    });
                });
            });
    } else {
        resultatsDiv.style.display = "none";
    }
});

// Fermer les résultats quand on clique ailleurs
document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !resultatsDiv.contains(e.target)) {
        resultatsDiv.style.display = 'none';
    }
});