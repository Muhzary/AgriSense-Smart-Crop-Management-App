// Weather Fetching Simulation (You can replace with actual API call)
document.addEventListener('DOMContentLoaded', function() {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = "Sunny, 28°C";

    // Simulate Soil Moisture Data
    const soilMoistureDisplay = document.getElementById('soil-moisture-display');
    soilMoistureDisplay.innerHTML = "Current Soil Moisture: 60%";

    // Task Management Simulation
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const taskDisplay = document.getElementById('task-display');

    let tasks = [];

    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const taskName = document.getElementById('task-name').value;
        const taskDate = document.getElementById('task-date').value;
        const task = { name: taskName, date: taskDate };
        tasks.push(task);

        updateTaskList();
        taskDisplay.innerHTML = `Next Task: ${task.name} on ${task.date}`;
    });

    function updateTaskList() {
        taskList.innerHTML = tasks.map(task => `<p>${task.name} on ${task.date}</p>`).join('');
    }

    // Irrigation Management
    const irrigationForm = document.getElementById('irrigation-form');
    const irrigationResult = document.getElementById('irrigation-result');

    irrigationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const moisture = document.getElementById('moisture').value;
        const irrigation = document.getElementById('irrigation').value;
        irrigationResult.innerHTML = `You need to irrigate ${irrigation} liters of water.`;
    });

    // Crop Health Monitor
    const cropHealthForm = document.getElementById('crop-health-form');
    const healthResult = document.getElementById('health-result');

    cropHealthForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const cropName = document.getElementById('crop-name').value;
        const healthStatus = document.getElementById('health-status').value;
        healthResult.innerHTML = `${cropName} is currently ${healthStatus}.`;
    });
});
