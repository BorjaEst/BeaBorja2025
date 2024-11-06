document.addEventListener("DOMContentLoaded", function () {
    // Determine the base path
    const basePath = window.location.pathname.includes('/pages/') ? '../' : '';

    // Fetch the nav.html file
    fetch(basePath + 'nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        });
});