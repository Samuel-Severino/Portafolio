document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const githubView = document.getElementById('github-view');
    const btnProyectos = document.getElementById('btn-proyectos');
    const btnCloseGithub = document.getElementById('close-github-btn');
    const navLinks = document.querySelectorAll('.nav-link');

    // Función para mostrar GitHub y ocultar el resto del sitio
    function openGithubView() {
        mainContent.style.display = 'none';
        githubView.classList.add('active');
        window.scrollTo(0, 0);
    }

    // Función para volver al sitio principal
    function closeGithubView() {
        githubView.classList.remove('active');
        mainContent.style.display = 'block';
    }

    // Evento al hacer clic en "Proyectos" en la barra de navegación
    btnProyectos.addEventListener('click', (e) => {
        e.preventDefault();
        openGithubView();
    });

    // Evento para cerrar la vista de GitHub
    btnCloseGithub.addEventListener('click', closeGithubView);

    // Si hace clic en cualquier otro enlace del nav mientras está en proyectos, regresa al main
    navLinks.forEach(link => {
        if (link !== btnProyectos) {
            link.addEventListener('click', () => {
                if (githubView.classList.contains('active')) {
                    closeGithubView();
                }
            });
        }
    });
});