<?php
// Insertion de données dans la table musique
$host = 'localhost';
$dbname = 'autocompletion';
$username = 'root';
$password = ''; 

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Liste de termes musicaux
    $musiques = [
        'Piano',
        'Guitare',
        'Batterie',
        'Violon',
        'Saxophone',
        'Trompette',
        'Flûte',
        'Clarinette',
        'Contrebasse',
        'Harmonica',
        'Accordéon',
        'Harpe',
        'Synthétiseur',
        'Basse',
        'Ukulélé',
        'Rock',
        'Jazz',
        'Blues',
        'Classique',
        'Pop',
        'Rap',
        'Reggae',
        'Country',
        'Metal',
        'Folk',
        'Do',
        'Ré',
        'Mi',
        'Fa',
        'Sol',
        'La',
        'Si',
        'Partition',
        'Tempo',
        'Rythme',
        'Mélodie',
        'Harmonie',
        'Solfège',
        'Gamme',
        'Accord'
    ];
    
    // Vérifier la structure de la table
    $stmt = $pdo->query("DESCRIBE musique");
    $columns = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo "<h3>Structure de la table musique :</h3>";
    echo "<pre>";
    print_r($columns);
    echo "</pre>";
    
    // Insérer les données
    $sql = "INSERT INTO musique (musique) VALUES (?)";
    $stmt = $pdo->prepare($sql);
    
    $inserted = 0;
    foreach ($musiques as $musique) {
        try {
            $stmt->execute([$musique]);
            $inserted++;
        } catch (PDOException $e) {
            echo "Erreur pour '$musique': " . $e->getMessage() . "<br>";
        }
    }
    
    echo "<h3>✅ $inserted termes musicaux insérés avec succès !</h3>";
    
    // Afficher les données insérées
    $stmt = $pdo->query("SELECT * FROM musique ORDER BY musique");
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo "<h3>Données dans la table :</h3>";
    echo "<pre>";
    print_r($results);
    echo "</pre>";
    
} catch (PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}
?>
