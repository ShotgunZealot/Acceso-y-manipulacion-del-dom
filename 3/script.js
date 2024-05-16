document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const songTitleElement = document.getElementById("song-title");
    const artistElement = document.getElementById("artist");
    const playBtn = document.getElementById("play-btn");
    const pauseBtn = document.getElementById("pause-btn");
    const nextBtn = document.getElementById("next-btn");

    const playlist = [
        { title: "Never Forget", artist: "Martin O'Donnell", src: "cancion1.mp3" },
        { title: "La resaka", artist: "SUPERMERK2", src: "cancion2.mp3" },
        { title: "The Only Thing I Know For Real", artist: "Jamie Christopherson", src: "cancion3.mp3" }
    ];

    let currentSongIndex = 0;

    function loadSong(index) {
        const song = playlist[index];
        audioPlayer.src = song.src;
        songTitleElement.textContent = song.title;
        artistElement.textContent = song.artist;
    }

    function playSong() {
        audioPlayer.play();
    }

    function pauseSong() {
        audioPlayer.pause();
    }

    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        console.log(currentSongIndex);
        loadSong(currentSongIndex);
        playSong();
    }

    playBtn.addEventListener("click", playSong);
    pauseBtn.addEventListener("click", pauseSong);
    nextBtn.addEventListener("click", nextSong);

    loadSong(currentSongIndex);
});
