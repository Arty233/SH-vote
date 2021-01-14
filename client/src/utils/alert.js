export default function playSound() {
    const alertUrl = 'https://proxy.notificationsounds.com/notification-sounds/when-604/download/file-sounds-1145-when.mp3';
    const audio = new Audio(alertUrl);
    audio.play();
}

// TODO:
// Download alert into assets