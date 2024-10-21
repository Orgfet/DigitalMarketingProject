function LoadDarkmode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Listener
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', LoadDarkmode);
});