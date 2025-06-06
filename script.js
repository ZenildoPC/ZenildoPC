document.querySelectorAll('a[href^="#"]').forEach(anchorLink => {
    anchorLink.addEventListener('click', function (event) {
        event.preventDefault();

        const targetSectionId = this.getAttribute('href');
        const targetSection = document.querySelector(targetSectionId); 

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'   
            });
            const mobileMenu = document.querySelector('.menu');
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active'); 
            }
        }
    });
});