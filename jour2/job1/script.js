function citation() {
	let elem = document.getElementById('citation');
	if (!elem) {
		console.error('Élément #citation introuvable');
		return;
	}
	// Affiche la citation dans la console
	console.log(elem.textContent);
	// Rend l'élément visible sur la page (au cas où il est caché)
	elem.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
	let btn = document.getElementById('button');
	if (btn) {
		btn.addEventListener('click', citation);
	} else {
		console.error('Bouton #button introuvable');
	}
});
