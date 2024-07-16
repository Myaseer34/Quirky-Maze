const playBtn = document.querySelector(".playBtn")
console.log("first")

if (playBtn) {
    console.log("first")
    playBtn.addEventListener("click", () => {
        const audio = new Audio("./assets/welcome.mp3")
        audio.play()

        setTimeout(() => {
            window.location.href = "/game.html";
        }, 3000)
    })
}


async function speakMessage(message) {
    const msg = new SpeechSynthesisUtterance(message);

    const voices = await window.speechSynthesis.getVoices();
    console.log(voices)
    for (const voice of voices) {

        if (voice.name.toLowerCase().includes('female') || voice.name.toLowerCase().includes('woman') || voice.name.toLowerCase().includes('girl')) {
            msg.voice = voice;
            console.log(voice)
            break;
        }
    }

    window.speechSynthesis.speak(msg);
}