const audio = document.querySelector('#audio');
const audioPlay = document.querySelector('#play');
const audioPause = document.querySelector('#pause');
audioPlay.addEventListener('click', play);
audioPause.addEventListener('click', pause);

function play() {
    audio.play();
}

function pause() {
    audio.pause();
}