/* =========================================
   ROMANTIC 5 SONG PLAYLIST
========================================= */

const songs = [
  { src: "Leekan Ashke.mp3", title: "Leekan" },
  { src: "Band Darvaze.mp3", title: "Band Darvaze" },
  { src: "Sahan Ton Nere.mp3", title: "Sahan Ton Nere" }
];

let currentSongIndex = 0;

const audio = document.getElementById("bgMusic");
const songTitle = document.getElementById("songTitle");
const playBtn = document.getElementById("playBtn");

/* Load Song */
function loadSong(index) {
  audio.src = songs[index].src;
  songTitle.innerText = songs[index].title.toUpperCase();
}

/* Play / Pause */
function toggleMusic() {
  if (audio.paused) {
    audio.play();
    playBtn.innerText = "⏸";
  } else {
    audio.pause();
    playBtn.innerText = "▶";
  }
}

/* Next */
function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
  playBtn.innerText = "⏸";
}

/* Previous */
function prevSong() {
  currentSongIndex =
    (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
  playBtn.innerText = "⏸";
}

/* Auto Next */
audio.addEventListener("ended", nextSong);

/* Floating Hearts */
function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "💗";
  heart.classList.add("floating-love");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 1200);

/* Init */
window.addEventListener("load", () => {
  loadSong(currentSongIndex);
});

function toggleDarkMode(){
  document.body.classList.toggle("dark");
}
