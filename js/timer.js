const timer = document.querySelector(".timer");
let time = 60; // Total time in seconds (1 minute)

// Function to format the time as MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Function to update the timer display
function updateTimerDisplay() {
    timer.innerText = formatTime(time);
    if (time <= 10) {
        timer.classList.add('blink');
    } else {
        timer.classList.remove('blink');
    }
}

// Function to start the countdown
function startCountdown() {
    const countdownInterval = setInterval(() => {
        time--;
        updateTimerDisplay();
        
        if (time <= 0) {
            clearInterval(countdownInterval);
            speakMessage("Time's up!"); // Optional: Speak a message when time is up
            setTimeout(() => {
                window.location.href = "/";
            }, 1000)
        }
    }, 1000);
}

// Initialize the timer display
updateTimerDisplay();

// Start the countdown
startCountdown();
