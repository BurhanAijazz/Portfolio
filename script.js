document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Force dark mode by default
    body.setAttribute('data-theme', 'dark');
    toggle.checked = true;
    localStorage.setItem('theme', 'dark');

    // Toggle dark mode
    toggle.addEventListener('change', function () {
        if (toggle.checked) {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    });
});