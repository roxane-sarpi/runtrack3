<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Pride</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
        }
        #gameContainer {
            margin: 20px auto;
            max-width: 600px;
        }
        #shuffleBtn {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            margin-bottom: 20px;
        }
        #imageContainer {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            margin-bottom: 20px;
        }
        .rainbow-piece {
            cursor: grab;
            border: 2px solid #ccc;
            border-radius: 5px;
        }
        .rainbow-piece:active {
            cursor: grabbing;
        }
        #message {
            font-size: 24px;
            font-weight: bold;
            margin-top: 20px;
        }
        .win {
            color: green;
        }
        .lose {
            color: red;
        }
    </style>
</head>
<body>
    <div id="gameContainer">
        <h1>Pride</h1>
        <button id="shuffleBtn">Mélanger</button>
        <div id="imageContainer"></div>
        <div id="message"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>