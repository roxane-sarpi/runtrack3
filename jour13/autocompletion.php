<?php
// 1. Connexion à la base de données
$host = 'localhost';
$dbname = 'autocompletion';
$username = 'root';
$password = ''; 

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur : " . $e->getMessage());
}

// 2. Traitement si une recherche est lancée
if (isset($_GET['search'])) {
    $terme = $_GET['search'];

    // Recherche SQL (contient le terme)
    $sql = 'SELECT * FROM musique WHERE musique LIKE ? LIMIT 10'; // J'ai ajouté LIMIT 10 pour ne pas inonder l'écran
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['%' . $terme . '%']);
    $resultats = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // 3. Le Tri
    $commencePar = [];
    $contient = [];

    foreach ($resultats as $resultat) {
        // stripos renvoie la position. Si c'est 0, c'est au début.
        if (stripos($resultat['musique'], $terme) === 0) {
            $commencePar[] = $resultat;
        } else {
            $contient[] = $resultat;
        }
    }

    // 4. L'Affichage (Génération du HTML)
    
    // D'abord ceux qui commencent par le terme
    foreach ($commencePar as $item) {
        echo '<div class="resultat-item">' . $item['musique'] . '</div>';
    }

    // Si on a des résultats dans les deux catégories, on ajoute la séparation
    if (!empty($commencePar) && !empty($contient)) {
        echo '<div class="separator"></div>';
    }

    // Ensuite ceux qui contiennent le terme
    foreach ($contient as $item) {
        echo '<div class="resultat-item">' . $item['musique'] . '</div>';
    }
}
?>