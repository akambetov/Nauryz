const audio = document.querySelector('#audio');
const audioPlay = document.querySelector('#play');
const audioPause = document.querySelector('#pause');
// document.addEventListener('DOMContentLoaded', play);
window.onload = play;
audioPlay.addEventListener('click', play);
audioPause.addEventListener('click', pause);

function play() {
    audio.play();
    alert(navigator.platform);
}

function pause() {
    audio.pause();
}