<?php
// Test de connexion et affichage des données
$host = 'localhost';
$dbname = 'autocompletion';
$username = 'root';
$password = ''; 

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connexion réussie !<br>";
    
    // Vérifier si la table existe
    $stmt = $pdo->query("SHOW TABLES");
    $tables = $stmt->fetchAll(PDO::FETCH_COLUMN);
    echo "Tables trouvées : " . implode(", ", $tables) . "<br><br>";
    
    // Afficher les données
    if (in_array('musique', $tables)) {
        $stmt = $pdo->query("SELECT * FROM musique LIMIT 10");
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo "Nombre de résultats : " . count($results) . "<br>";
        echo "<pre>";
        print_r($results);
        echo "</pre>";
    }
} catch (PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}
?>
