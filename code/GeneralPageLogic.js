function LoadDarkmode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

//Dark Mode Listener
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', LoadDarkmode);
});

function SendUserInputToMail() {

}

