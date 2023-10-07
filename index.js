function highlightNavigation() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navegacion ul li a");

    sections.forEach((section, index) => {
        const top = section.offsetTop - 50; 
        const bottom = top + section.clientHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
            navLinks.forEach(link => link.classList.remove("active"));
            navLinks[index].classList.add("active");
        }
    });
}

window.addEventListener("scroll", highlightNavigation);



const menuToggle = document.querySelector('.menu-toggle');
const navegacion = document.querySelector('.navegacion');

menuToggle.addEventListener('click', () => {
    navegacion.classList.toggle('active');
});


