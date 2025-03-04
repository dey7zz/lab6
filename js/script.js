
boutonsModale = document.querySelectorAll('.bouton');
modale = document.querySelector('.modale');


for (let i = 0; i < boutonsModale.length; i++) {
    boutonsModale[i].addEventListener('click', openModale);
}
function openModale() {
    chemin = this.previousElementSibling.getAttribute("src");
    image = document.createElement('img');
    image.setAttribute('src', chemin);
    image.classList.add('zoom');
    modale.appendChild(image);
    modale.classList.add('visible');

    image.addEventListener("click", closeModale);
}

function closeModale(event) {
    // On ajoutera le code suivant ici

    modale.removeChild(event.target);
    modale.classList.remove('visible');
}