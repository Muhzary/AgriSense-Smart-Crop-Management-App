// script.js

// Simulate fetching soil moisture data
function fetchMoistureData() {
  // For now, we will use random data to simulate real sensor data
  const moistureLevel = Math.floor(Math.random() * 100);
  document.getElementById('moisture-level').textContent = `${moistureLevel}%`;

  // Set irrigation conditions (example: below 30% starts irrigation)
  if (moistureLevel < 30) {
    startIrrigation();
  } else {
    stopIrrigation();
  }
}

// Function to start irrigation
function startIrrigation() {
  console.log('Irrigation started');
  document.getElementById('start-irrigation').disabled = true;
  document.getElementById('stop-irrigation').disabled = false;
}

// Function to stop irrigation
function stopIrrigation() {
  console.log('Irrigation stopped');
  document.getElementById('start-irrigation').disabled = false;
  document.getElementById('stop-irrigation').disabled = true;
}

// Event listeners for buttons
document.getElementById('start-irrigation').addEventListener('click', startIrrigation);
document.getElementById('stop-irrigation').addEventListener('click', stopIrrigation);

// Simulate fetching data every 5 seconds
setInterval(fetchMoistureData, 5000);
