// Elements
//const stopwatchDisplay = document.getElementById('stopwatch');

// Variables to track time
let startTime = 0;
let elapsedTime = 0;
let intervalId;
let running = false; // To check if stopwatch is running

// Format time to show seconds and milliseconds (ss.mm)
function formatTime(time) {
  const milliseconds = Math.floor((time % 1000) / 10); // Display 2 decimal places
  const seconds = Math.floor((time / 1000) % 60);

  return `${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
}

// Update the stopwatch display
function updateStopwatch(a) {
  const now = Date.now();
  elapsedTime = now - startTime;
  document.getElementById(a).textContent = formatTime(elapsedTime);
}

// Start or Pause the stopwatch
function toggleStopwatch(b) {
  if (!running) {
    startTime = Date.now() - elapsedTime; // Adjust start time to continue
    intervalId = setInterval(function() {
      updateStopwatch(b);
    }, 10); // Update every 10 ms
    //startButton.textContent = "Pause";
    running = true;
  } else {
    clearInterval(intervalId); // Pause the stopwatch
    //startButton.textContent = "Start";
    running = false;
  }
}

// Reset the stopwatch
function resetStopwatch(a) {
  clearInterval(intervalId);
  elapsedTime = 0;
  document.getElementById(a).textContent = "00.00"; // Reset to 0
  //startButton.textContent = "Start";
  running = false;
}






let startTime2 = 0;
let elapsedTime2 = 0;
let intervalId2;
let running2 = false; // To check if stopwatch is running

// Format time to show seconds and milliseconds (ss.mm)

// Update the stopwatch display
function updateStopwatch2(a) {
  const now = Date.now();
  elapsedTime2 = now - startTime2;
  document.getElementById(a).textContent = formatTime(elapsedTime2);
}

// Start or Pause the stopwatch
function toggleStopwatch2(b) {
  if (!running2) {
    startTime2 = Date.now() - elapsedTime2; // Adjust start time to continue
    intervalId2 = setInterval(function() {
      updateStopwatch2(b);
    }, 10); // Update every 10 ms
    //startButton.textContent = "Pause";
    running2 = true;
  } else {
    clearInterval(intervalId2); // Pause the stopwatch
    //startButton.textContent = "Start";
    running2 = false;
  }
}

// Reset the stopwatch
function resetStopwatch2(a) {
  clearInterval(intervalId2);
  elapsedTime2 = 0;
  document.getElementById(a).textContent = "00.00"; // Reset to 0
  //startButton.textContent = "Start";
  running2 = false;
}
