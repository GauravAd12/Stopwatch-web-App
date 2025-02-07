let minutes = 0, seconds = 0, milliseconds = 0;
let timer;
let running = false;

// Selecting elements
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");
const startPauseBtn = document.getElementById("startPauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const laps = document.getElementById("laps");

// Start & Pause Function
function startPause() {
    if (!running) {
        timer = setInterval(updateTime, 10);
        startPauseBtn.textContent = "Pause";
        startPauseBtn.style.backgroundColor = "#ffc107";
        running = true;
    } else {
        clearInterval(timer);
        startPauseBtn.textContent = "Start";
        startPauseBtn.style.backgroundColor = "#28a745";
        running = false;
    }
}

// Reset Function
function reset() {
    clearInterval(timer);
    minutes = seconds = milliseconds = 0;
    updateDisplay();
    startPauseBtn.textContent = "Start";
    startPauseBtn.style.backgroundColor = "#28a745";
    running = false;
    laps.innerHTML = "";
}

// Update Stopwatch Display
function updateTime() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    updateDisplay();
}

// Update Display Function
function updateDisplay() {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
    millisecondsDisplay.textContent = String(milliseconds / 10).padStart(2, "0");
}

// Lap Function
function addLap() {
    if (running) {
        let lapTime = `${minutesDisplay.textContent}:${secondsDisplay.textContent}:${millisecondsDisplay.textContent}`;
        let lapItem = document.createElement("li");
        lapItem.textContent = `Lap ${laps.childElementCount + 1}: ${lapTime}`;
        laps.appendChild(lapItem);
    }
}

// Event Listeners
startPauseBtn.addEventListener("click", startPause);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener("click", addLap);
