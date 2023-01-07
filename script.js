const pianoKeys = document.querySelectorAll(".key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-checkbox input");

let audio = new Audio();
let allKeys = [];

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play();


    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150)
}

pianoKeys.forEach(key => {
    // console.log(key.dataset.key);
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
})

const pressedKey = (e) => {
    if (allKeys.includes(e.key)) playTune(e.key);
}

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = (e) => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
} 

document.addEventListener("keydown", pressedKey);
volumeSlider.addEventListener("input", handleVolume);
keysCheck.addEventListener("click", showHideKeys);