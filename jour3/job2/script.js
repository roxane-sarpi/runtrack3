// Ordre correct des images de l'arc-en-ciel
const correctOrder = ['arc1.png', 'arc2.png', 'arc3.png', 'arc4.png', 'arc5.png', 'arc6.png'];
let currentOrder = [...correctOrder];

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('imageContainer');
    const shuffleBtn = document.getElementById('shuffleBtn');
    const messageDiv = document.getElementById('message');

    // Créer les images
    function createImages(order) {
        container.innerHTML = '';
        order.forEach((imageName, index) => {
            const img = document.createElement('img');
            img.src = `assets/${imageName}`;
            img.className = 'rainbow-piece';
            img.draggable = true;
            img.dataset.name = imageName;
            img.dataset.index = index;
            
            // Événements de drag and drop
            img.addEventListener('dragstart', handleDragStart);
            img.addEventListener('dragover', handleDragOver);
            img.addEventListener('drop', handleDrop);
            img.addEventListener('dragend', handleDragEnd);
            
            container.appendChild(img);
        });
    }

    // Mélanger les images
    function shuffleImages() {
        currentOrder = [...correctOrder].sort(() => Math.random() - 0.5);
        createImages(currentOrder);
        messageDiv.textContent = '';
        messageDiv.className = '';
    }

    // Vérifier si l'ordre est correct
    function checkOrder() {
        const images = container.querySelectorAll('.rainbow-piece');
        const currentImageOrder = Array.from(images).map(img => img.dataset.name);
        
        const isCorrect = currentImageOrder.every((name, index) => name === correctOrder[index]);
        
        if (isCorrect) {
            messageDiv.textContent = 'Vous avez gagné';
            messageDiv.className = 'win';
        } else {
            messageDiv.textContent = 'Vous avez perdu';
            messageDiv.className = 'lose';
        }
    }

    // Gestion du drag and drop
    let draggedElement = null;

    function handleDragStart(e) {
        draggedElement = this;
        this.style.opacity = '0.5';
    }

    function handleDragOver(e) {
        e.preventDefault();
        return false;
    }

    function handleDrop(e) {
        e.preventDefault();
        
        if (draggedElement !== this) {
            // Échanger les positions des images
            const allImages = Array.from(container.querySelectorAll('.rainbow-piece'));
            const draggedIndex = allImages.indexOf(draggedElement);
            const targetIndex = allImages.indexOf(this);
            
            if (draggedIndex < targetIndex) {
                this.parentNode.insertBefore(draggedElement, this.nextSibling);
            } else {
                this.parentNode.insertBefore(draggedElement, this);
            }
            
            // Vérifier l'ordre après le déplacement
            checkOrder();
        }
        
        return false;
    }

    function handleDragEnd(e) {
        this.style.opacity = '1';
    }

    // Bouton mélanger
    shuffleBtn.addEventListener('click', shuffleImages);

    // Initialiser avec l'ordre correct
    createImages(currentOrder);
});