function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
  
  }

  function scrollToTop() {
    window.scrollTo(0,0);
  }

  function scrollToProject() {
    const targetElement = document.getElementById('projects');

    if (targetElement) {
        // Calculate the dynamic offset
        const headerHeight = document.querySelector('nav').offsetHeight;
        const offset = headerHeight + 10; 

        window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth'
        });
    }
}
