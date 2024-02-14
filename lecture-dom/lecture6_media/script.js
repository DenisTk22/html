
const audioEl = document.querySelector('.audio');

audioEl.addEventListener('play', function (e) {
    console.log('Вы нажали аудио плей');
});

audioEl.addEventListener('pause', function (e) {
    console.log('Вы нажали паузу');
});

const buffered = audioEl.buffered;

// сколько было прослушено аудио
const { played } = audioEl // объект TimeRanges
const handlePlayed = () => {
    let totalPlayedSeconds = 0
    for (i = 0; played.length; i++) {
        totalPlayedSeconds += played.end(i) - played.start(i)
    }
    console.log(totalPlayedSeconds)
}
audioEl.addEventListener('pause', handlePlayed, false)
audioEl.addEventListener('ended', handlePlayed, false)

// Как только пользователь закончит запись и вернётся на веб-сайт, надо будет каким-то образом
// получить данные файла.Вы можете получить к ним доступ в обработчике события onchange
// элемента ввода, а затем прочитав свойство files объекта события.

const recorder = document.getElementById('recorder')
const player = document.getElementById('player')
recorder.addEventListener('change', (event) => {
    const [file] = event.target.files
    const url = URL.createObjectURL(file)
// Добавление элементу потока в качестве источника
    player.src = url
})
