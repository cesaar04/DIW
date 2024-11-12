var video = document.getElementById("myVideo");

var btn = document.getElementById("myBtn");

var videoTitle = document.getElementById("videoTitle");

var showTime = 2;

video.addEventListener("timeupdate", function() {
    if (video.currentTime >= showTime && video.currentTime < showTime + 5) {
        videoTitle.style.display = "block";
    } else {
        videoTitle.style.display = "none";
    }
});

var soundBtn = document.getElementById("soundBtn");

var soundImg = document.getElementById("soundImg");

function myFunction(){
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}
function soundMute() {
    if (video.muted) {
        video.muted = false;
        soundImg.src = "sound.png";
        soundImg.alt = "Sound On";
    } else {
        video.muted = true;
        soundImg.src = "mute.png";
        soundImg.alt = "Mute Off";
    }
}