window.addEventListener('scroll', function() {
    const footer = document.getElementById('footer');
    
    // Calculer le pourcentage de scroll
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    
    // Changer la couleur du footer en fonction du pourcentage
    // Du noir (#333) au vert (#00ff00)
    const hue = (scrollPercentage * 1.2); // De 0 à 120 (rouge à vert)
    footer.style.backgroundColor = `hsl(${hue}, 70%, 40%)`;
});