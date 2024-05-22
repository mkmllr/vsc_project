const currentPath = location.pathname;

document.querySelectorAll('nav a').forEach(link => {
    if (link.href.indexOf(currentPath) !== -1) {
        link.classList.add('active');
    }
    else {
        link.classList.remove('active');
    }
});