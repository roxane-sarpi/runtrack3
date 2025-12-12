<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liste des utilisateurs</title>
    <style>
        /* Un peu de style pour que ce soit lisible */
        table { border-collapse: collapse; width: 50%; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
        button { padding: 10px 20px; font-size: 16px; cursor: pointer; }
    </style>
</head>
<body>

    <h1>Gestion des Utilisateurs</h1>

    <button id="updateBtn">Update (Mettre à jour)</button>

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody id="userTableBody">
            </tbody>
    </table>

    <script>
        // On sélectionne notre bouton et notre corps de tableau
        const btn = document.getElementById('updateBtn');
        const tbody = document.getElementById('userTableBody');

        // On ajoute un écouteur d'événement sur le clic
        btn.addEventListener('click', function() {
            
            // 1. Appel AJAX vers notre fichier PHP
            fetch('users.php')
                .then(response => response.json()) // On convertit la réponse en JSON
                .then(data => {
                    
                    // 2. On vide le tableau actuel pour éviter les doublons
                    tbody.innerHTML = '';

                    // 3. On boucle sur chaque utilisateur reçu
                    data.forEach(user => {
                        // Création d'une nouvelle ligne <tr>
                        const row = document.createElement('tr');

                        // Insertion du contenu HTML dans la ligne
                        row.innerHTML = `
                            <td>${user.id}</td>
                            <td>${user.nom}</td>
                            <td>${user.prenom}</td>
                            <td>${user.email}</td>
                        `;

                        // Ajout de la ligne au tableau
                        tbody.appendChild(row);
                    });
                })
                .catch(error => console.error('Erreur:', error));
        });
    </script>
</body>
</html>