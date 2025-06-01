window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const logo = document.getElementById('logo');

    if (window.scrollY > 50) {
        logo.src = '/img/Faviconn.png'; 
        header.classList.add('shrink');
    }
    else {
        logo.src = '/img/Logo2.png'; 
        header.classList.remove('shrink');
    }
});