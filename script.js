// Add this script at the end of your <body> or in a separate JS file
document.addEventListener('DOMContentLoaded', function () {
    // Set dark mode as default when page loads
    // document.documentElement.setAttribute('data-theme', 'dark');
    // document.getElementById('darkModeToggle').checked = true;
    const toggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        toggle.checked = true;
    }

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

// // Set dark mode as default
// document.documentElement.setAttribute('data-theme', 'dark');
// document.getElementById('darkModeToggle').checked = true;

// // Add event listener for toggle
// document.getElementById('darkModeToggle').addEventListener('change', function () {
//     if (this.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//     } else {
//         document.documentElement.setAttribute('data-theme', 'light');
//     }
// });