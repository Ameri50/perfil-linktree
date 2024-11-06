document.addEventListener("DOMContentLoaded", function() {
    const profileMenuBtn = document.querySelector('.profile-menu-btn');
    const shareMenu = document.querySelector('.share-menu');
    const dots = document.querySelectorAll('.menu-dots');
    const linkMenus = document.querySelectorAll('.link-menu');

    // Muestra/oculta el menú de compartir del perfil
    profileMenuBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Evita que el clic cierre el menú inmediatamente
        shareMenu.style.display = shareMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Cierra el menú de compartir si se hace clic fuera de él
    window.addEventListener('click', function(event) {
        if (!profileMenuBtn.contains(event.target) && !shareMenu.contains(event.target)) {
            shareMenu.style.display = 'none';
        }
    });

    // Muestra/oculta los menús de los enlaces al hacer clic en los puntos
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function(event) {
            event.stopPropagation(); // Evita que el clic cierre el menú inmediatamente
            const menu = linkMenus[index];
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Cierra los menús de los enlaces si se hace clic fuera
    window.addEventListener('click', function(event) {
        linkMenus.forEach(menu => {
            menu.style.display = 'none';
        });
    });
});
