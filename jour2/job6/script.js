const konamiCode = [
    'ArrowUp', 'ArrowUp', 
    'ArrowDown', 'ArrowDown', 
    'ArrowLeft', 'ArrowRight', 
    'ArrowLeft', 'ArrowRight', 
    'b', 'a'
];

let konamiIndex = 0;

document.addEventListener('keydown', function(e) {
    const key = e.key.toLowerCase();
    
    if (key === konamiCode[konamiIndex].toLowerCase()) {
        konamiIndex++;
        
        if (konamiIndex === konamiCode.length) {
            document.body.classList.add('konami');
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});