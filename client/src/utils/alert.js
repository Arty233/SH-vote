import sound from "../assets/sounds/alert.mp3";

export default function playSound() {
    const audio = new Audio();
    audio.src = sound;
    audio.play();
}