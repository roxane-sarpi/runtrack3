// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', () => {
    
    // Appel initial au chargement de la page
    filtrerDonnees();
    
    // Mise à jour automatique lors de la saisie
    document.getElementById('search-id').addEventListener('input', filtrerDonnees);
    document.getElementById('search-name').addEventListener('input', filtrerDonnees);
    document.getElementById('search-type').addEventListener('change', filtrerDonnees);

});

// La fonction doit être GLOBALE pour que onclick="filtrerDonnees()" fonctionne
function filtrerDonnees() {
    fetch('pokemon.json')
        .then(response => response.json())
        .then(data => {
            
            const idInput = document.getElementById('search-id').value;
            const nomInput = document.getElementById('search-name').value.toLowerCase();
            const typeInput = document.getElementById('search-type').value;

            const resultats = data.filter(pokemon => {
                const matchId = (idInput === "") || (pokemon.id == idInput);
                const matchName = (nomInput === "") || (pokemon.name.french.toLowerCase().includes(nomInput));
                const matchType = (typeInput === "") || (pokemon.type.includes(typeInput));
                return matchId && matchName && matchType;
            });

            // Affichage dans la console
            console.log(`${resultats.length} Pokémon trouvé(s)`);
            console.table(resultats.map(p => ({
                ID: p.id,
                Nom: p.name.french,
                Type: p.type.join(', ')
            })));

            // Affichage dans le DOM
            const divResultats = document.getElementById('results');
            divResultats.innerHTML = '';

            if (resultats.length === 0) {
                divResultats.innerHTML = '<p>Aucun Pokémon trouvé !</p>';
                return;
            }

            resultats.forEach(pokemon => {
                const htmlPokemon = `
                    <div style="border: 1px solid #ccc; padding: 10px; margin: 10px; border-radius: 8px;">
                        <h3>#${pokemon.id} - ${pokemon.name.french}</h3>
                        <p><strong>Type :</strong> ${pokemon.type.join(', ')}</p>
                        <p><strong>PV :</strong> ${pokemon.base.HP} | <strong>Attaque :</strong> ${pokemon.base.Attack}</p>
                    </div>
                `;
                divResultats.innerHTML += htmlPokemon;
            });
        })
        .catch(error => console.error('Erreur lors du chargement :', error));
}