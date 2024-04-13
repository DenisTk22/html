const backButton = document.querySelector('.backButton');
const forwardButton = document.querySelector('.forwardButton');

backButton.addEventListener('click', function() {
    window.history.back();
});
forwardButton.addEventListener('click', function() {
    window.history.forward();
});