const puzzleContainer = document.getElementById('puzzle-container');
const messageDiv = document.getElementById('message');
const restartBtn = document.getElementById('restart-btn');

let tiles = [];
let emptyIndex = 8;
let isGameWon = false;

function initGame() {
    tiles = [];
    emptyIndex = 8;
    isGameWon = false;
    puzzleContainer.innerHTML = '';
    messageDiv.textContent = '';
    messageDiv.classList.remove('win');
    restartBtn.classList.add('hidden');
    puzzleContainer.classList.remove('disabled');

    // Créer les tuiles
    for (let i = 0; i < 9; i++) {
        tiles.push(i);
    }

    // Mélanger les tuiles
    shuffleTiles();

    // Créer les éléments DOM
    renderPuzzle();
}

function shuffleTiles() {
    // Mélanger jusqu'à obtenir une configuration résolvable
    do {
        for (let i = tiles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
        }
        emptyIndex = tiles.indexOf(8);
    } while (!isSolvable() || isWinningConfiguration());
}

function isSolvable() {
    let inversions = 0;
    for (let i = 0; i < tiles.length; i++) {
        if (tiles[i] === 8) continue;
        for (let j = i + 1; j < tiles.length; j++) {
            if (tiles[j] === 8) continue;
            if (tiles[i] > tiles[j]) inversions++;
        }
    }
    return inversions % 2 === 0;
}

function isWinningConfiguration() {
    for (let i = 0; i < tiles.length; i++) {
        if (tiles[i] !== i) return false;
    }
    return true;
}

function renderPuzzle() {
    puzzleContainer.innerHTML = '';
    
    tiles.forEach((tileValue, index) => {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        
        if (tileValue === 8) {
            tile.classList.add('empty');
        } else {
            // Utiliser l'image correspondante (1.PNG à 9.PNG)
            const imageNumber = tileValue + 1;
            tile.style.backgroundImage = `url('assets/${imageNumber}.PNG')`;
            tile.style.backgroundSize = 'cover';
            tile.addEventListener('click', () => moveTile(index));
        }
        
        puzzleContainer.appendChild(tile);
    });
}

function moveTile(index) {
    if (isGameWon) return;

    const row = Math.floor(index / 3);
    const col = index % 3;
    const emptyRow = Math.floor(emptyIndex / 3);
    const emptyCol = emptyIndex % 3;

    // Vérifier si la tuile est adjacente à la case vide
    const isAdjacent = 
        (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
        (Math.abs(col - emptyCol) === 1 && row === emptyRow);

    if (isAdjacent) {
        // Échanger la tuile avec la case vide
        [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
        emptyIndex = index;
        
        renderPuzzle();
        checkWin();
    }
}

function checkWin() {
    if (isWinningConfiguration()) {
        isGameWon = true;
        messageDiv.textContent = 'Vous avez gagné !';
        messageDiv.classList.add('win');
        restartBtn.classList.remove('hidden');
        puzzleContainer.classList.add('disabled');
    }
}

restartBtn.addEventListener('click', initGame);

// Initialiser le jeu au chargement
initGame();