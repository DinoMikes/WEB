document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu'); 
    const closeButton = document.getElementById('close-button');
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    closeButton.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });

    let currentPage = 0;
    const pages = document.querySelectorAll('.page');

    document.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            currentPage = Math.min(currentPage + 1, pages.length - 1);
        } else {
            currentPage = Math.max(currentPage - 1, 0);
        }

        pages.forEach((page, index) => {
            page.style.transform = `translateY(-${currentPage * 100}vh)`; 
        });

        event.preventDefault();
    });
});
