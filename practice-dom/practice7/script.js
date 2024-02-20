//Реализовать прогресс видео
// Реализовать отображение пройденного времени
// Выставить элемент input type range


const videoEl = document.querySelector('.video');

const playEl = document.querySelector('.play');
const pauseEl = document.querySelector('.pause');

const timingEl = document.querySelector('.timing');
const volumeEL = document.querySelector('.volume');



playEl.addEventListener('click', e => {
    videoEl.play();
    playEl.style.display = 'none';
    pauseEl.style.display = 'block';

});

pauseEl.addEventListener('click', e => {
    videoEl.pause();
    playEl.style.display = 'block';
    pauseEl.style.display = 'none';
});

videoEl.addEventListener('timeupdate', function () {
    const percentage = (videoEl.currentTime / videoEl.duration) * 100;
    timingEl.value = percentage;
    updateTimeSpent();
});

videoEl.addEventListener('loadedmetadata', function () {
    updateTimeSpent();
});

function updateTimeSpent() {
    const timeLeft = videoEl.duration - videoEl.currentTime;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = Math.floor(timeLeft % 60);
    timeSpent.textContent = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

volumeEL.addEventListener('input', e => {
    videoEl.volume = volumeEL.value;
});



/*// время обновления
videoEl.addEventListener('timeupdate', (e) => {
// currentTimeEl.innerText = videoEl.currentTime;
timingEl.value = videoEl.currentTime / videoEl.duration * 100;
});

playEl.addEventListener('click', function(event) {
videoEl.play();
});
pauseEl.addEventListener('click', function(event) {
videoEl.pause();
});
//если нажали громкость
soundEl.addEventListener('click', function(event) {
volumeEl.classList.add('open');
});

volumeEl.addEventListener('input', () => {
videoEl.volume = videoEl.value;
});

// время обновления
videoEl.addEventListener('timeupdate', (e) => {
currentTimeEl.innerText = Math.round(videoEl.currentTime * 10)/10;
timingEl.value = videoEl.currentTime / videoEl.duration * 100;
}); */


