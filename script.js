// Get the buttons and display elements
const claimTaskBtn = document.getElementById("claimTaskBtn");
const rewardDisplay = document.getElementById("rewardDisplay");
const timerDisplay = document.getElementById("timerDisplay");
const removeRewardBtn = document.getElementById("removeRewardBtn");

// Timer duration (30 minutes)
const timerDuration = 30 * 60 * 1000; // 30 minutes in milliseconds

// Function to update the display from localStorage
function updateRewardDisplay() {
  const savedReward = localStorage.getItem("faucetReward");
  if (savedReward) {
    rewardDisplay.innerHTML = `Reward: $${parseFloat(savedReward).toFixed(5)}`;
  } else {
    rewardDisplay.innerHTML = `Reward: $0.00`;
  }
}

// Function to start the timer
function startTimer() {
  const timerEndTime = Date.now() + timerDuration; // Calculate the exact end time
  localStorage.setItem("timerEndTime", timerEndTime); // Store the end time in localStorage

  // Hide the claim button and start the countdown
  claimTaskBtn.style.display = "none";
  updateTimerDisplay(timerEndTime); // Call to start updating the timer display
}

// Function to update the timer display
function updateTimerDisplay(timerEndTime) {
  const interval = setInterval(() => {
    const remainingTime = timerEndTime - Date.now();

    if (remainingTime <= 0) {
      clearInterval(interval);
      timerDisplay.innerHTML = "Time remaining: 00:00";
      claimTaskBtn.style.display = "inline-block"; // Show claim button again
    } else {
      const minutes = Math.floor(remainingTime / 60000);
      const seconds = Math.floor((remainingTime % 60000) / 1000);
      timerDisplay.innerHTML = `Wait For Next Claim : ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
  }, 1000);
}

// Handle faucet claim button click
claimTaskBtn.addEventListener("click", () => {
  let currentReward = parseFloat(localStorage.getItem("faucetReward")) || 0;
  currentReward += 0.00001; // Increase reward by $0.00005

  // Save the updated reward to localStorage
  localStorage.setItem("faucetReward", currentReward.toFixed(5));

  // Update the display
  updateRewardDisplay();

  // Start the timer after claiming
  startTimer();
  document.getElementById('timerDisplay').style.display='block';
});

// Handle remove reward button click


// Initialize display on page load
updateRewardDisplay();

// Check if a timer is already running on page load
const timerEndTime = localStorage.getItem("timerEndTime");
if (timerEndTime) {
  const remainingTime = timerEndTime - Date.now();

  if (remainingTime > 0) {
    // Timer is still running, hide claim button and start countdown
    claimTaskBtn.style.display = "none";
    updateTimerDisplay(timerEndTime); // Continue the countdown from the saved end time
  } else {
    // Timer has expired, show claim button again
    claimTaskBtn.style.display = "inline-block";
    localStorage.removeItem("timerEndTime"); // Clear expired timer from localStorage
    
  }
}
function  withdraw () {
 window.location.href='/withdrawal.html';
}
function  taskpage () {
 window.location.href='/task.html';
}
window.onload = function() {
            if (localStorage.getItem('linkClicked')) {
                document.getElementById('myLink').style.display = 'none';
            }
        };
        function hideLink() {
            // Store the click status in localStorage
            localStorage.setItem('linkClicked', 'true');
            
            // Hide the link
            document.getElementById('myLink').style.display = 'none';
            
            // Redirect to another page
            window.location.href = 'https://www.example.com'; // Change to your desired URL
        }