function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
}

// Fonction pour vérifier si un élément est visible à l'écran
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour déclencher les animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.hidden');
    elements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add('fade-in'); // ou 'slide-up' selon l'effet souhaité
            element.classList.remove('hidden'); // Retirer la classe hidden une fois l'animation déclenchée
        }
    });
}

// Écouter l'événement de défilement
window.addEventListener('scroll', handleScrollAnimations);

// Déclencher une première vérification au chargement de la page
window.addEventListener('load', handleScrollAnimations);

// Redirection vers la page À propos lors du clic sur "S'inscrire"
document.querySelectorAll('.formation button').forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'A_propos.html';
    });
});