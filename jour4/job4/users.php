<?php

$host = "localhost";
$dbname = "fetch";
$username = "root";
$password = "";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
// 1. Connexion à la base de données
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    
    // Pour afficher les erreurs SQL si besoin
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // 2. Préparation et exécution de la requête
    $sql = "SELECT * FROM utilisateurs";
    $stmt = $pdo->query($sql);

    // 3. Récupération des résultats sous forme de tableau associatif
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // 4. Envoi des données au format JSON
    // On précise au navigateur qu'on lui envoie du JSON
    header('Content-Type: application/json');
    echo json_encode($users);

} catch (PDOException $e) {
    // En cas d'erreur, on renvoie un message JSON
    echo json_encode(['error' => 'Erreur de connexion : ' . $e->getMessage()]);
}