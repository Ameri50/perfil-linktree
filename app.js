document.addEventListener("DOMContentLoaded", function() {
    const profileMenuBtn = document.querySelector('.profile-menu-btn');
    const shareMenu = document.querySelector('.share-menu');
    const dots = document.querySelectorAll('.menu-dots');
    const linkMenus = document.querySelectorAll('.link-menu');

    // Muestra/oculta el menú de compartir del perfil
    profileMenuBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleMenu(shareMenu);
    });

    // Muestra/oculta los menús de los enlaces al hacer clic en los puntos
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function(event) {
            event.stopPropagation();
            const menu = linkMenus[index];
            
            // Oculta cualquier otro menú abierto antes de mostrar el actual
            linkMenus.forEach(m => {
                if (m !== menu) hideMenu(m);
            });
            
            toggleMenu(menu);
        });
    });

    // Cierra los menús si se hace clic fuera de ellos
    window.addEventListener('click', function(event) {
        if (!profileMenuBtn.contains(event.target) && !shareMenu.contains(event.target)) {
            hideMenu(shareMenu);
        }
        linkMenus.forEach(menu => {
            if (!menu.contains(event.target)) {
                hideMenu(menu);
            }
        });
    });

    // Función para alternar el menú con efecto de opacidad
    function toggleMenu(menu) {
        menu.classList.toggle('menu-visible');
        menu.style.display = menu.classList.contains('menu-visible') ? 'block' : 'none';
    }

    // Función para ocultar el menú con transición de opacidad
    function hideMenu(menu) {
        menu.classList.remove('menu-visible');
        menu.style.display = 'none';
    }
});
