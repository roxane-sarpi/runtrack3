<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Moteur de Recherche Musique</title>
    <style>
        #resultats {
            border: 1px solid #ccc;
            width: 300px; /* Même largeur que l'input */
            display: none; /* Caché par défaut */
        }
        .resultat-item {
            padding: 10px;
            cursor: pointer;
        }
        .resultat-item:hover {
            background-color: #f0f0f0;
        }
        .separator {
            border-top: 1px solid #000;
            margin: 5px 0;
        }
    </style>
</head>
<body>

    <div style="text-align:center; margin-top: 50px;">
        <h1>Moteur Musique 🎵</h1>
        
        <form action="recherche.php" method="GET">
            <input type="text" name="search" id="search" placeholder="Rechercher un terme musical..." autocomplete="off" style="width: 300px; height: 30px;">
            <input type="submit" value="Rechercher">
        </form>

        <div id="resultats" style="margin: 0 auto; text-align: left;"></div>
    </div>

    <script src = "script.js"></script>
</body>
</html>